<template>
  <div class="text-xl font-bold py-6 text-white">
    <div class="flex justify-center items-center">
    <h3 class="text-center py-6 text-3xl">Ultimos productos</h3>
      <img src="../assets/lana.png" alt="logo" class="w-24"/>
    </div>
    <div class="flex justify-center">
      <div class="flex gap-4 flex-wrap justify-center" data-aos="fade-left" data-aos-duration="2000">
        <CardLastProduct v-for="prod in lastProducts" :prod="prod" :key="prod" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from "vue";
import CardLastProduct from "../components/CardLastProduct.vue";

const allProducts = ref([])
const lastProducts = ref([])

const fetchProducts = async ()=>{
  try {
    const response = await fetch('http://localhost:4000/api/product')
    if(!response.ok){
      throw new Error("No se encontraron los productos")
    }
    allProducts.value =await response.json()
    lastProducts.value = allProducts.value.slice(-3)
    console.log(lastProducts.value)
  } catch (error) {
    console.log(error)
  }
}



onMounted(()=>{
  fetchProducts()
})


</script>

<style scoped></style>
