<script>
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children, data } = $props();
</script>
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar { data}/>


{@render children()}

<Footer/>
