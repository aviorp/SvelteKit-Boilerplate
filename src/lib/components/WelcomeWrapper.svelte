<script>
  import welcomeBanner from '@/assets/welcome-banner.avif';
</script>

<div class="relative min-h-screen flex">
  <div
    class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0"
  >
    <div
      class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-default-900 text-white bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${welcomeBanner})` }}
    >
      <div
        class="absolute bg-gradient-to-b from-default-600 to-default-500 opacity-75 inset-0 z-0"
      />
      <div class="w-full max-w-md z-10">
        <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
          Vote For Your Games, Just in One Place.
        </div>
        <div class="sm:text-sm xl:text-md text-default-200 font-normal">
          With our automated voting application, you can say goodbye to the time-consuming
          process of manually submitting your votes. Our advanced algorithms analyze
          various factors, including gameplay mechanics, graphics, storyline, and
          player feedback, to generate accurate and personalized voting recommendations
          for each user. This ensures that your voice is heard and that your preferences
          align with the overall evaluation of the games.
        </div>
      </div>
      <ul class="circles">
        {#each Array.from(Array(12).keys()) as item, index}
          <li key={index} />
        {/each}
      </ul>
    </div>
    <div
      class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 md:default-none bg-white dark:bg-black"
    >
      <div class="max-w-md w-full space-y-8">
        <slot />
      </div>
    </div>
  </div>
</div>

<style>
  /*remove custom style*/
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }
  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 10s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
</style>
