<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	export let query;
</script>

<main class="h-screen overflow-hidden dark:bg-gray-800 py-4 px-7">
	<!-- <input type="text" bind:value> -->
	{#if query}
		{#if query.isError}
			<div class="flex justify-center items-top h-full">
				<div class="alert alert-error w-96 h-14 m-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span>{query.error}</span>
				</div>
			</div>
		{:else if query.isLoading}
			<div class="flex flex-col justify-center items-center h-full">
				<Spinner size="14" />
			</div>
		{:else if !query.data.length}
			<div class="flex justify-center items-center h-full">
				<p class="text-default-500 text-2xl">No Data Found</p>
			</div>
		{:else}
			<slot />
		{/if}
	{:else}
		<slot />
	{/if}
</main>
