<template>
  <div
    class="bg-color-1 flex justify-center min-h-screen text-xl font-bold text-color5"
  >
    <div class="flex flex-col gap-6 justify-center items-center">
      <p class="text-center text-3xl">
        {{ product.title }}
      </p>
      <div class="flex gap-4 flex-wrap justify-center">
        <img
          data-aos="zoom-out-right"
          src="../assets/logo.png"
          class="object-cover"
        />
        <div class="flex flex-col gap-6 shadow-2xl p-4 rounded">
          <p class="max-w-96">
            {{ product.description }}
          </p>

          <div>
            <span>${{ product.price }}</span>
            <v-select
              v-model="colorSelected"
              label="Color"
              :items="product.colors"
            ></v-select>
          </div>
          <div></div>
          <p v-if="messageError" class="text-center text-red-500">
            {{ messageError }}
          </p>
          <span
            @click="submit"
            class="rounded text-color5 hover:text-color1 hover:scale-105 duration-500 font-bold border-color2 border-2 hover:bg-color3 text-center p-2 cursor-pointer"
            >🛒 Agregar Producto</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const productString = localStorage.getItem("product");
const productStorage = productString ? JSON.parse(productString) : [];
console.log(productStorage);
const router = useRouter();
interface Product {
  title: string;
  description: string;
  picture: string;
  colors: string[];
  price: number;
  quantity: number;
  maxQuantity: number;
}
const route = useRoute();
const product = ref<Product>({
  title: "",
  description: "",
  picture: "",
  colors: [],
  price: 0,
  quantity: 1,
  maxQuantity: 0,
});
const id = route.params.id;
const colorSelected = ref("");
const messageError = ref("");
const fetchProductById = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACK_URL}/product/${id}`
    );
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

const submit = () => {
  if (!colorSelected.value) {
    messageError.value = "Seleccione un color";
  } else {
    messageError.value = "";
    product.value.colors = [colorSelected.value];
    productStorage.push(product.value);
    localStorage.setItem("product", JSON.stringify(productStorage));
    console.log(product.value);
    router.push("/products");
  }
};

onMounted(fetchProductById);
</script>
