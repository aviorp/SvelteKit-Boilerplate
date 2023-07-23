<script lang="ts">
  import {fly } from "svelte/transition";
  import { Button, Card } from "flowbite-svelte";
  import { CheckCircleOutline } from "flowbite-svelte-icons";

  export let username: Pick<SlotI, "username">;
  export let server_name: Pick<SlotI, "server_name">;
  export let votes: Pick<SlotI, "votes">;
  export let created_at: Pick<SlotI, "created_at">  ;

</script>
<Card
  class="flex text-default-600 gap-6 dark:text-white relative shadow-2xl border-2  "
  size="lg"
  padding="xl"
>
  <CheckCircleOutline
    class="p-0 bg-green-600 text-white rounded-full absolute z-20 -top-2 right-4 -mr-6"
  />

  <h2 class="card-title">Username: {username}</h2>
  {#if server_name}
    <p>Server: {server_name}</p>
  {/if}
  <p>Votes: {votes || 0}</p>
  <p>
    Created at:
    {created_at?.substring(0, 10)}
  </p>
  <footer class="card-actions">
    <Button
      on:click
      class="btn btn-block w-full bg-default-500 dark:bg-default-8000 text-white hover:bg-default-400 dark:hover:bg-default-500"
    >
      Update Slot
    </Button>
  </footer>
</Card>
