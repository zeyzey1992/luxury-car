<script>
	import { enhance } from '$app/forms';
	

	let { form } = $props();
</script>

<h1>Login</h1>
<form method="post" use:enhance>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<label>
		Password
		<input type="password" name="password" required />
	</label>
	<button>Login</button>
</form>
{#if form?.message}
	<p style="color: red">{form.message}</p>
{/if}
<p>Don't have an account? <a href="/register">Register</a></p>

<style>
	form {
		margin: 0;
		background-color: #fdf6e3;
		font-family: 'Georgia', serif;
		color: #4b3621;
	}

	h1 {
		text-align: center;
		font-size: 2.5rem;
		margin-top: 60px;
		color: #b85c38;
		font-family: 'Georgia', serif;
	}

	form {
		max-width: 380px;
		margin: 40px auto;
		padding: 25px;
		background-color: #fff8f0;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0,0,0,0.1);
		text-align: left;
	}

	label {
		display: flex;
		flex-direction: column;
		margin-bottom: 15px;
		font-size: 14px;
		color: #4b3621;
	}

	input {
		margin-top: 6px;
		padding: 10px;
		border-radius: 6px;
		border: 1px solid #e8c547;
		background-color: #fff;
		font-family: 'Georgia', serif;
	}

	input:focus {
		outline: none;
		border-color: #b85c38;
		box-shadow: 0 0 0 2px rgba(184, 92, 56, 0.2);
	}

	button {
		width: 100%;
		padding: 10px;
		background-color: #f4d35e;
		border: none;
		border-radius: 6px;
		font-weight: bold;
		color: #4b3621;
		cursor: pointer;
		transition: 0.3s;
		font-family: 'Georgia', serif;
	}

	button:hover {
		background-color: #e8c547;
	}

	p {
		text-align: center;
		font-size: 13px;
		color: #6b4e3d;
		margin-top: 10px;
	}

	p a {
		color: #b85c38;
		text-decoration: none;
	}

	p a:hover {
		text-decoration: underline;
	}

	
</style>
