
<script>
	let { data } = $props();

	// Dublin weather forecast (JSON API)
	let weather = $state(null);
	let loading = $state(true);

	async function getWeather() {
		loading = true;
		try {
			const response = await fetch(`https://wttr.in/Dublin?format=j1`);
			const jsonData = await response.json();
			const current = jsonData.current_condition[0];
			weather = {
				temp: current.temp_C,
				feelsLike: current.FeelsLikeC,
				humidity: current.humidity,
				windSpeed: current.windspeedKmph,
				description: current.weatherDesc[0].value,
				uvIndex: current.uvIndex
			};
		} catch (error) {
			console.error("Weather error:", error);
			weather = null;
		} finally {
			loading = false;
		}
	}
	getWeather(); 
</script>

<section class="welcomePage">
   <h1>Welcome to Luxury Car Hire & Wedding Cars</h1>
	<p>Discover our exclusive fleet of luxury cars perfect for weddings, events, or special occasions.</p>
	<div class="weather-container">
		{#if loading}
			<div class="weather-card">⏳ Loading Dublin weather...</div>
		{:else if weather}
			<div class="weather-card">
				<div class="weather-location">🇮🇪 Dublin, Ireland</div>
				<div class="weather-main">
					<span class="weather-temp">{weather.temp}°C</span>
					<span class="weather-desc">{weather.description}</span>
				</div>
				<div class="weather-details">
					<span>🌡️ Feels like: {weather.feelsLike}°C</span>
					<span>💧 Humidity: {weather.humidity}%</span>
					<span>💨 Wind: {weather.windSpeed} km/h</span>
					<span>☀️ UV Index: {weather.uvIndex}</span>
				</div>
			</div>
		{:else}
		<div class="weather-card error">⚠️ Weather data unavailable</div>
		{/if}
	</div>
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

.weather-container {
	max-width: 400px;
	margin: 20px auto;
}
.weather-card {
	background: rgba(255, 255, 255, 0.25);  
	backdrop-filter: blur(10px);  
	border-radius: 20px;
	padding: 16px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	text-align: center;
}
.weather-card.error {
	background: rgba(255, 0, 0, 0.15);
	color: #b00020;
}
.weather-location {
	font-weight: bold;
	font-size: 1.2rem;
	color: #b85c38;
	margin-bottom: 8px;
}
.weather-main {
	display: flex;
	justify-content: center;
	align-items: baseline;
	gap: 12px;
	margin-bottom: 12px;
}
.weather-temp {
	font-size: 2rem;
	font-weight: bold;
}
.weather-desc {
	font-size: 1rem;
	color: #4b3621;
}
.weather-details {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 12px;
	font-size: 0.8rem;
	border-top: 1px solid #e8d5b5;
	padding-top: 10px;
}
</style>

