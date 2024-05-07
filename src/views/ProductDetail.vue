<template>
  <div
    class="bg-color-1 flex justify-center min-h-screen text-xl font-bold text-color5"
  >
    <div class="containerr flex justify-center items-center">
      <div class="flex gap-4 flex-wrap justify-center">
        <img src="../assets/logo.png" class="object-cover" />
        <div class="flex flex-col gap-6">
          <p class="max-w-96">
            {{ product.description }}
          </p>

          <div>
            <v-select
              label="Color"
              :items="product.colors"
            ></v-select>
          </div>

          <span
            class="rounded text-color5 hover:text-color1 hover:scale-105 duration-500 font-bold border-color2 border-2 hover:bg-color3 text-center p-2 cursor-pointer"
            >Comprar</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
interface Product {
  title: string;
  description: string;
  picture: string;
  colors: string[];
}
const route = useRoute();
const product = ref<Product>({
  title: "",
  description: "",
  picture: "",
  colors: [],
});
const id = route.params.id;
const fetchProductById = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/product/${id}`);
    if (!response.ok) {
      throw new Error("No se encontro el producto");
    }
    const data = await response.json();
    product.value = data;
    console.log(product.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchProductById);
</script>
