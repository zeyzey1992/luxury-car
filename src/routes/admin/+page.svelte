<script>
    import { onMount } from 'svelte';
    
    let { data } = $props();
    let user = data?.user;
    let allUsers = data?.users || [];     
    /**
     * @type {string | any[] | null | undefined}
     */
    let localBookings = $state([]);
    
    onMount(() => {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('bookings');
            if (stored) {
                localBookings = JSON.parse(stored);
            }
        }
    });
</script>

<div class="admin-panel">
    <h1>⚙️ Admin Panel</h1>
    <p>Welcome, {user?.name} 👑</p>
    
    <hr/>

    <!-- LOCALSTORAGE REZERVATIONS -->
    <h2>💾 LocalStorage Reservations</h2>
    {#if localBookings.length === 0}
        <p>❌ No reservations in localStorage.</p>
    {:else}
        <table>
            <thead>
                <tr>
                    <th>Car</th>
                    <th>Date</th>
                    <th>Days</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {#each localBookings as b}
                    <tr>
                        <td>{b.carName}</td>
                        <td>{b.startDate} → {b.endDate}</td>
                        <td>{b.days}</td>
                        <td>${b.total}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}

    <hr/>

    <!-- ALL USERS -->
    <h2>👥 All Users</h2>
    {#if allUsers.length === 0}
        <p>❌ No users found.</p>
    {:else}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Balance</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {#each allUsers as u}
                    <tr>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>€{u.balance}</td>
                        <td>{u.role}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}

    <a href="/cars">← Back</a>
</div>

<style>
    .admin-panel {
        max-width: 1200px;
        margin: 40px auto;
        padding: 30px;
        background: #fff8f0;
        border-radius: 15px;
    }
    h1, h2 { 
        color: #b85c38; 
    }
    table {
         width: 100%; 
         border-collapse: collapse; 
         margin: 15px 0;
    }
    th, td { 
        border: 1px solid #ddd; 
        padding: 8px; 
        text-align: left; 
    }
    th { 
        background: #f4d35e; 
    }
    a { 
        color: #b85c38; 
        text-decoration: none; 
    }
</style>