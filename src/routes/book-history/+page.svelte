<script>
// @ts-nocheck

	import { onMount } from 'svelte';

	/**
     * @type {string | any[] | null | undefined}
     */
	let bookings = $state([]);

	onMount(() => {
		const saved = localStorage.getItem('bookings');
		bookings = saved ? JSON.parse(saved).reverse() : [];
	});

	function clearHistory() {
		localStorage.removeItem('bookings');
		bookings = [];
	}
</script>

<div class="history-page">
	<h1>📋 My Booking History</h1>

	{#if bookings.length === 0}
		<div class="empty">
			<p>🚗 You haven't booked any cars yet.</p>
			<a href="/cars" class="btn">Browse Cars</a>
		</div>
	{:else}
		<div class="bookings-list">
			{#each bookings as booking}
				<div class="booking-card">
					<img src={booking.carImage} alt={booking.carName} />

					<div class="booking-info">
						<h3>{booking.carName}</h3>
						<p class="color">🎨 {booking.carColor}</p>
						<p class="dates">
							📅 {booking.startDate} → {booking.endDate}
						</p>
						<p class="details">
							⏱️ {booking.days} days | 💰 €{booking.total}
						</p>
						<p class="date">
							Booked:
							{booking.bookedAt || new Date(booking.id).toLocaleDateString()}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="total-booking">
			<strong>Total Bookings: {bookings.length}</strong>
		</div>

		<button class="clear-btn" type="button" onclick={clearHistory}>
			🗑️ Clear History
		</button>
	{/if}

	<a href="/cars" class="back-link">← Back to Cars</a>
</div>

<style>
	.history-page {
		max-width: 750px;
		margin: 60px auto;
		padding: 30px;
		background: #fff8f0;
		border-radius: 15px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	h1 {
		text-align: center;
		color: #b85c38;
		margin-bottom: 30px;
		font-size: 2rem;
	}

	.empty {
		text-align: center;
		padding: 50px 20px;
	}

	.btn {
		display: inline-block;
		padding: 10px 25px;
		background: #f4d35e;
		color: #4b3621;
		text-decoration: none;
		border-radius: 8px;
		font-weight: bold;
	}

	.bookings-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.booking-card {
		display: flex;
		gap: 20px;
		background: white;
		border-radius: 12px;
		padding: 18px;
		border-left: 5px solid #f4d35e;
	}

	.booking-card img {
		width: 120px;
		height: 90px;
		object-fit: cover;
		border-radius: 10px;
	}

	.booking-info {
		flex: 1;
	}

	.booking-info h3 {
		color: #b85c38;
		margin: 0 0 5px 0;
	}

	.total-booking {
		margin-top: 25px;
		padding: 12px;
		background: #f4d35e;
		border-radius: 8px;
		text-align: center;
		font-weight: bold;
	}

	.clear-btn {
		width: 100%;
		margin-top: 20px;
		padding: 10px;
		background: #ffcccc;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
	}

	.back-link {
		display: inline-block;
		margin-top: 25px;
		color: #b85c38;
		text-decoration: none;
	}
</style>