<script lang="ts">
	import Slot from '$lib/components/Slot.svelte';
	import { isLoading } from '$lib/stores';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function handleVote(e: CustomEvent) {
		isLoading.set(true);
	}
</script>
<Button class="mb-4" on:click={
  () =>{
    isLoading.set(true);
    setTimeout(() => {
      isLoading.set(false);
    }, 2000);
  }
} >
 Refresh Data
</Button>
<div class="h-full">
	<h1 class="font-bold uppercase text-default-950 dark:text-white mb-4">Your Latest Votes</h1>
	<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p">
		{#each data?.votes as slot (slot.username)}
			<Slot {...slot} on:click={handleVote} />
		{/each}
	</ul>
</div>
