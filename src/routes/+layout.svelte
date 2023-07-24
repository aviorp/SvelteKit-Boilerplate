<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import { isLoading } from '$lib/stores';
	import { Spinner } from 'flowbite-svelte';
	import { fade, fly, blur } from 'svelte/transition';
</script>

<div class="app">
	<Header />
	<main class="container dark:bg-gray-800 py-4 px-7">
		{#if $isLoading}
			<div in:blur={{ amount: 10 }} out:blur={{ amount: 10 }} class="flex h-screen overflow-hidden justify-center items-center">
				<Spinner size="14" />
			</div>
		{:else}
			<section class="h-full" in:fly={{ y: 300, duration: 1500 }} out:fade>
				<slot />
			</section>
		{/if}
	</main>
</div>
