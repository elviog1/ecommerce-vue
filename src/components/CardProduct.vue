<template>
  <div class="w-80 border-color5 border-2 shadow-2xl rounded bg-color3 hover:scale-105 duration-300">
    <RouterLink :to="`/products/${propProduct.prod?._id}`">
      <img src="../assets/lana.png" />
      <div class="p-4">
        <p>{{ propProduct.prod?.title }}</p>
        <p class="truncate text-sm">
          {{propProduct.prod?.description}}
        </p>
        <div class="flex justify-between" >
          <span>$1000</span>
          <span>Cant: {{ propProduct.prod?.maxQuantity }}</span>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import {defineProps} from 'vue'
const propProduct = defineProps({
    prod:Object
})
</script>

<style scoped></style>
