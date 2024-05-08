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
const search = ref('')

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

watch(search, (newValue, oldValue) => {
  filteredProducts.value = allProducts.value.filter(product => {
    const searchTerm = newValue.toLowerCase();
    return product.title.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
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
            'Bufandas',
            'Gorros',
            'Guantes',
            'Individuales',
            'Mantas',
            'Medias',
          ]"
        ></v-select>
        <v-text-field v-model="search" label="Buscar por titulo o descripcion"></v-text-field>
      </div>
      <div class="flex gap-4 justify-center flex-wrap py-4">
        <CardProduct data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" v-for="prod in filteredProducts" :prod="prod" :key="prod?._id" />
      </div>
    </div>
  </main>
</template>
