<script setup lang="ts">
import LastProduct from "../components/LastProducts.vue";
import Welcome from "../components/Welcome.vue";

</script>

<template>
  <div class="bg-color-1">
    <div
      class="w-full banner h-96 object-cover flex justify-center items-center"
    >
      <div class="flex flex-col gap-4 items-center text-color5">
        <h1 class="text-4xl font-bold ">Pequeña aldea</h1>
        <h2 class="text-xl">Cositas hechas con pasion y amor.</h2>
      </div>
    </div>
    <Welcome />
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
  background: linear-gradient(#ffffdd, #c0efd2, #384252);
}

</style>
