<script>
  import cars from '$lib/data/cars.json';
</script>

<div class="cars-page">
  <h1>Our Luxury Cars</h1>
  <div class="cars-list">
    {#each cars as car}
      <div class="car-card">
        <img src={car.image} alt={car.name} />
        <h2>{car.name} ({car.year})</h2>
        <p>Color: {car.color}</p>
        <strong>Price: {car.price}</strong>
        <p>{car.description}</p>
        <a href={`/cars/${car.id}`} class="btn">View Details</a>
        <a href="/booking" class="btn">Book Now</a>
      </div>
    {/each}
  </div>
</div>

<style>
.cars-page {
  padding: 60px 20px;
  text-align: center;
  background-color: #fdf6e3; 
  font-family: 'Georgia', serif;
  color: #4b3621;
}

.cars-page h1 {
  font-family: 'Great Vibes', cursive; 
  font-size: 3rem;
  margin-bottom: 40px;
  color: #b85c38; 
}

.cars-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.car-card {
  background-color: #fff8f0; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 250px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;
}

.car-card:hover {
  transform: translateY(-5px);
}

.car-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.car-card h2 {
  margin-bottom: 8px;
  color: #b85c38;
  font-size: 1.4rem;
}

.car-card p {
  color: #6b4e3d;
  font-size: 1rem;
  margin-bottom: 8px;
}

.car-card .btn {
  padding: 10px 20px;
  background-color: #f4d35e; 
  color: #4b3621;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  margin: 5px;
  display: inline-block;
  transition: background 0.3s;
}

.car-card .btn:hover {
  background-color: #e8c547;
}

</style>