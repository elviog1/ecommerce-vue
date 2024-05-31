<template>
  <div class="w-72 h-48 card-product overflow-hidden z-10 ">
    <RouterLink :to="`/products/${product.prod?._id}`">
    
      <img
      :src="product.prod?.picture"
      alt="product"
      class="hover:blur-sm duration-300 rounded h-48 w-full object-cover"
      />
      <p class="text-center title text-2xl">{{ product.prod?.category }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import { RouterLink } from 'vue-router';
const product = defineProps({
    prod:Object
})
</script>
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
  transform: translate(-50%, -400%);
}
</style>
