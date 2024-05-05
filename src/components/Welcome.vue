<template>
  <div class="flex justify-center py-5">
    <div class="container flex justify-center items-center gap-4">
      <div class="flex flex-col items-center gap-6">
        <p class="w-96">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam
          unde, praesentium cum sequi saepe voluptate dolorem autem magnam
          corporis, earum quae placeat minima iure error ipsa, porro atque
          laboriosam.
        </p>
        <RouterLink to="/products">Conoce nuestros productos</RouterLink>
      </div>
      <img
        src="https://www.thesprucecrafts.com/thmb/UNhBlGf8jhkU2LbEs3iT5G3Q2vU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crochet-and-yarn-balls--top-view-on-light-wood-1096446856-56dd7c663fc74598ae8b06a0c90a4293.jpg"
        alt=""
        class="w-96 rounded"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
