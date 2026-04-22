<script>
   
    let { data } =$props();
    let car = data.car;
    let user = data.user;
    let discountMessage = $state('');

   // console.log("car.id = " + car.id);
    
    let startDate = $state('');
    let endDate = $state('');
    let days = $state(0);
    let total = $state(0);
    let message = $state('');

    let calcCount = 0;


    function calculate() {
        calcCount++;
        console.log("calculate() - number of calls = " + calcCount);

        if(!startDate || !endDate){
            // don't do anything until BOTH dates have been set
            return;
        }

        let start = new Date(startDate);
        let end = new Date(endDate);

        if(end.getTime()<start.getTime()){
            message = ' The end date can not be earlier than start date';
            days=0;
            total=0;
            return;
        }
        
        let calc = end.getTime() - start.getTime();
        days = Math.ceil(calc/ (1000 * 3600 * 24));

        let discount =0;
        discountMessage = '';

        if (user?.category === 'silver') {
        discount = 0.05;
        discountMessage = '🎉 Silver category discount applied: 5% off';
    }

        if (user?.category === 'gold') {
        discount = 0.10;
        discountMessage = '🏆 Gold category discount applied: 10% off';
    }

        if (user?.category === 'elite') {
     discount = 0.20;
        discountMessage = '👑 Elite category discount applied: 20% off';
    }
        
        // @ts-ignore
        total = car.price * days * (1 - discount);
        message='';        
    }
    
    function placeOrder() {
    if (days <= 0) {
        message = "❌ Please select dates first!";
        return;
    }
    if (!car) {
        message = "❌ Car not found!";
        return;
    }
    
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    
    bookings.push({
        id: Date.now(),
        carId: car.id,
        carName: car.name,
        carImage: car.image,
        carColor: car.color,
        startDate: startDate,
        endDate: endDate,
        days: days,
        total: total,
        bookedAt: new Date().toLocaleString()
    });
    
    localStorage.setItem('bookings', JSON.stringify(bookings));
    

    window.location.href = '/book-history';
}



    calculate();


</script>

<div class="booking-page">
    {#if car}




        <h1>Book Your Car</h1>
        
        <img src={car.image} alt={car.name}/>
        <h2>{car.name} ({car.year})</h2>
        <p>Color: {car.color}</p>
        <p>{car.description}</p>
        <strong>€{car.price} / day</strong>
        
        <hr/>
        
        
        <label>
        Start Date
        <input type="date" bind:value={startDate} onchange={calculate}/>
        </label>
        
        <label>
        End Date
        <input type="date" bind:value={endDate} onchange={calculate}/>
        </label>
        
        {#if days > 0}
            <div class="preview">{days} days = €{total}</div>

            {#if discountMessage}
            <div class="discount-msg">
                {discountMessage}
            </div>
            {/if}
        {/if}

        <!-- <div class="pre-view">
            <strong>Total Price: ${total}</strong>
        </div> -->
        
       <button onclick={placeOrder}>Book Now</button> 
        
        {#if message}
            <div class="message">{message}</div>
        {/if}
        
       


        <a href="/cars">← Back to Cars</a>
        
    {:else}
        <p>Car not found. <a href="/cars">Go back to Cars</a></p>
    {/if}

</div>

<style>
    .booking-page {
        max-width: 500px;
        margin: 60px auto;
        padding: 30px;
        background: #fff8f0;
        border-radius: 10px;
        text-align: center;
    }
    h1 {
        color: #b85c38;
    }
    img {
        width: 100%;
        max-width: 250px;
        border-radius: 10px;
    }
    label {
        display: block;
        text-align: left;
        margin-top: 10px;
        font-weight: bold;
    }
    input {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    button {
        width: 100%;
        margin-top: 20px;
        padding: 12px;
        background: #f4d35e;
        opacity: 1;
        transition: 0.2s;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }
    .preview {
        background: gold;
        padding: 10px;
        border-radius: 5px;
        margin: 15px 0;
    }
    .message {
        background: green;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
    }
    a {
        color: #b85c38;
    }
    hr {
        margin: 20px 0;
    }
    .discount-msg {
    margin-top: 8px;
    font-size: 0.9rem;
    color: #4b3621;
    background: gold;
    padding: 5px;
    border-radius: 5px;
}
</style>