<template>
  <div class="">
    <h3 class="text-center py-6">Ultimos productos</h3>
    <div class="flex justify-center">
      <div class="flex gap-4">
        <CardLastProduct />
        <CardLastProduct />
        <CardLastProduct />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardLastProduct from "../components/CardLastProduct.vue";
</script>

<style scoped></style>
