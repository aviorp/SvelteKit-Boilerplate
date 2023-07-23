<script lang="ts">
  let count: number = 0;

  const increment = () :void => {
    count += 1
   }

</script>

<button on:click={increment}>
  count is {count};
</button>


<section>
  {#each [1, 2, 3] as number }
    <p>The number is {number}</p>
  {/each}
</section>
