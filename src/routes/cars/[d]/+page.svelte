<script>
    
    let { data } = $props();
    let car = data.car;
</script>

<div class="car-detail-page">
  {#if car}
    <div class="car-card">
      
      <div class="car-image">
        <img src={ car.image } alt={ car.name } />
      </div>

      <div class="car-info">
        <h1>{ car.name }  ({ car.year })</h1>
        <p>Color: { car.color }</p>
        <strong>Price: {car.price}</strong>
        <p>{ car.description }</p>
        <a href="/booking?carId={car.id}" class="btn">Book Now</a>
      </div>
    </div>
  {:else}
    <p>Car not found</p>
  {/if}
</div>

<style>
  .car-card{
    display: flex;
    align-items: center;
    gap: 30px;
    background-color: #f6e2d3;
    padding: 30px;
    border-radius: 10px;
  }
  .car-image img{
    width: 300px;
    border-radius: 10px;
  }
  .car-info{
    text-align: left;
  }
  .car-info h1{
    margin-bottom: 10px;
    color: #b85c38;
  }
  .btn{
    display: inline-block;
    margin-top: 15px;
    border: 2px solid;
    border-radius: 10px;
    padding: 10px;
    color: #b85c38;
  }
</style>