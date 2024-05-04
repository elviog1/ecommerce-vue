<script setup lang="ts">
import LastProduct from "../components/LastProducts.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="bg-color-1">
    <div
      class="w-full banner h-96 object-cover flex justify-center items-center"
    >
      <div class="flex flex-col gap-4 items-center">
        <h1 class="text-3xl">Pequeña aldea</h1>
        <h2 class="text-md">Cositas hechas con pasion y amor.</h2>
      </div>
    </div>
    <LastProduct />
  </div>
</template>

<style>
.banner {
  background-image: url(https://www.shutterstock.com/image-photo/multicolored-woolen-balls-granny-sqaure-600nw-2288287753.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-color-1 {
  background: linear-gradient(rgb(186 230 253), rgb(14 165 233));
}
.bg-color-2 {
  background: linear-gradient(rgb(14 165 233), rgb(3 105 161));
}
</style>
