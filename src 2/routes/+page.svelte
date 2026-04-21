<script>
	let { data } = $props();
</script>

<section class="welcomePage">
   <h1>Welcome to Luxury Car Hire & Wedding Cars</h1>
	<p>Discover our exclusive fleet of luxury cars perfect for weddings, events, or special occasions.</p>
	<a href="/cars" class="btn">View Our Cars</a>
</section>

<section class="features">
    <div class="feature">
        <h2>Luxury Fleet</h2>
		<p>Top-quality vehicles for any special event.</p>
    </div>
    <div class="feature">
		<h2>Wedding Cars</h2>
		<p>Make your special day unforgettable with our premium wedding cars.</p>
	</div>
	<div class="feature">
		<h2>Easy Booking</h2>
		<p>Quick and simple booking process online.</p>
	</div>
</section>

<style>
.welcomePage {
	text-align: center;
	padding: 80px 20px;
	background: 
	linear-gradient(rgba(245, 222, 179, 0.6), rgba(210, 180, 140, 0.6)), 
	url('/images/home4.webp') center/cover no-repeat;
	color: #4b3621; 
	border-radius: 10px;
	font-family: 'Georgia', serif; 
}


.welcomePage h1 {
	font-size: 3rem;
	margin-bottom: 20px;
	text-shadow: 1px 1px 2px rgba(0,0,0,0.2); 
    font-family: 'Great Vibes', cursive;
}

.welcomePage p {
	font-size: 1.2rem;
	margin-bottom: 30px;
	color: #5b4636; 
}

.btn {
	padding: 12px 30px;
	background-color: #f4d35e; 
	color: #4b3621; 
	text-decoration: none;
	border-radius: 6px;
	font-weight: 500;
	transition: background 0.3s, transform 0.2s;
	box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
}

.btn:hover {
	background-color: #e8c547; 
	transform: translateY(-2px);
}

.features {
	display: flex;
	justify-content: space-around;
	padding: 60px 20px;
	background-color: #fdf6e3;
}

.feature {
	text-align: center;
	width: 250px;
	padding: 20px;
	background-color: #fff8f0; 
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.feature h2 {
	margin-bottom: 15px;
	font-size: 1.5rem;
	color: #b85c38; 
}

.feature p {
	font-size: 1rem;
	color: #6b4e3d; 
}
</style>

