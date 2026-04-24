<script>
	let { data } = $props();

//console.log("data.user.id= "+  data.user.name);

</script>


<nav>
    <a href="/">Home</a>
    |
    <a href="/cars">Cars</a>
    
    <!--Can not display booking-history if admin log-in -->
    {#if data?.isLoggedIn && data?.user?.role !== 'ROLE_ADMIN'}
        |
        <a href="/book-history">📋 Booking History</a>
    {/if}

   <!-- Only Admin Can See -->
   {#if data?.user?.role === 'ROLE_ADMIN'}
   |
	 <a href="/admin">👑 Admin Panel</a>
   {/if}

   <div class="user_info">
		{#if data?.isLoggedIn}

            <img src={data.user.image} alt={data.user.image} class="profile_image">
			<strong>{data.user.name}</strong>

      <span class="balance">💰 €{data.user.balance}</span>

			<form method="post" action="/logout">
				<button>Logout</button>
			</form>
		{:else}
			<a href="/login">Login</a>
            |
			<a href="/register">Register</a>
		{/if}
        </div>

   
    
</nav>

<style>
nav {
  display: flex;
  gap: 40px; 
  background-color: #8B5E3C; 
  padding: 15px 30px;
  align-items: center;
}

nav a {
  color: #FDF6E3; 
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;
}

nav a:hover {
  color: #F4D35E; 
}
.user_info {
  margin-left: auto;
  display: flex;
  gap: 15px;
  align-items: center;
}

.profile_image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}
button{
    border: 2px solid;
    border-radius: 2px;
    background-color: #F4D35E;
    color:#FDF6E3;
}
.balance {
    background: #8B5E3C;
    color: black;
    padding: 5px 10px;
    border-radius: 8px;
    font-weight: bold;
}

</style>