<script setup lang="ts">
import LastProduct from "../components/LastProducts.vue";
import Welcome from "../components/Welcome.vue";
</script>

<template>
  <div>
    <div
      class="w-full banner h-96 object-cover flex justify-center items-center"
    >
      <div class="flex flex-col gap-4 items-center text-color5">
        <h1 class="text-4xl font-bold animate__animated animate__zoomIn">
          Pequeña aldea
        </h1>
        <h2 class="text-xl animate__animated animate__zoomIn animate__delay-1s">
          Cositas hechas con pasion y amor.
        </h2>
      </div>
    </div>
    <div class="bg-color-1">
      <Welcome />
      <LastProduct  />
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 90%,
      #ffffdd 100%
    ),
    url(https://www.shutterstock.com/image-photo/multicolored-woolen-balls-granny-sqaure-600nw-2288287753.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
