<template>
  <div class="w-72 h-48 card-product overflow-hidden">
    <img
      src="https://www.thesprucecrafts.com/thmb/UNhBlGf8jhkU2LbEs3iT5G3Q2vU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crochet-and-yarn-balls--top-view-on-light-wood-1096446856-56dd7c663fc74598ae8b06a0c90a4293.jpg"
      alt=""
      class="hover:blur-sm duration-300 rounded"
    />
    <p class="text-center title text-2xl">title</p>
  </div>
</template>

<style scoped>
.card-product {
  position: relative;
}

.title {
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s;
}

.card-product:hover .title {
  transform: translate(-50%, -450%);
}
</style>
