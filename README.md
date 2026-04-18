Stage 1 =>
--I downloaded the starter project and updated the README file for my own project.

Stage 2=>For Home Page
--I created the home page with a welcome section and added a background image with styling. 
--I also added a features section to highlight key services like luxury fleet, wedding cars, and easy booking. 
--I used CSS to improve the layout, colours, and overall design.

Stage 3=>For Cars Page
--I created a JSON file to store car data such as name, price, description, and images. 
--I imported this data into the cars page and displayed all cars using a loop. 
--I also created a dynamic route to show individual car details when a car is selected. 
--Additionally, I styled both the cars list page and the car detail page using CSS to improve the layout and design.

Stage 4=> For Booking Page
--I created a booking page that receives the selected car ID from the URL parameter.
--I added two date inputs Start Date and End Date so the user can select the rental period.
--When the user selects dates, the system automatically calculates the number of days and the total price using JavaScript's getTime() method.
--I implemented a "Place Order" button that shows a confirmation message with the car name, rental duration, and total price.
--I used Svelte 5's `$state()` to make the price update reactively when dates change.