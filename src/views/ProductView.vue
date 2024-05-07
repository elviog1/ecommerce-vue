<script setup lang="ts">
import CardProduct from '@/components/CardProduct.vue';
import { onMounted, ref, watch } from 'vue';

interface Product {
  _id: string;
  title: string;
  description: string;
  picture: string;
  category: string;
}

const allProducts = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([]);
const category = ref('Todos');

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/product');
    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    allProducts.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

watch(category, (newValue, oldValue) => {
  filteredProducts.value = allProducts.value.filter(product => {
    return newValue === 'Todos' || product.category === newValue;
  });
});

onMounted(async () => {
  await fetchProducts();
  filteredProducts.value = allProducts.value;
});
</script>

<template>
  <main class="bg-color-1 flex justify-center min-h-screen text-xl font-bold text-color5">
    <div class="container">
      <p class="text-center text-3xl">Productos</p>
      <div class="sm:flex-row flex gap-4 flex-col">
        <v-select
          v-model="category"
          label="Categoria"
          :items="[
            'Todos',
            'Adornos',
            'Gorros',
            'Guantes',
            'Individuales',
            'Mantas',
            'Medias',
          ]"
        ></v-select>
        <v-text-field label="Buscador"></v-text-field>
      </div>
      <div class="flex gap-4 justify-center flex-wrap py-4">
        <CardProduct v-for="prod in filteredProducts" :prod="prod" :key="prod?._id" />
      </div>
    </div>
  </main>
</template>
