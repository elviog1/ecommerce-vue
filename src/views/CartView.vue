<script setup lang="ts">
import { ref } from "vue";
import ResendButton from "../components/ResendButton.vue";
import { useCartStore } from "@/stores/counter";
const productString = localStorage.getItem("product");
const productStorage = ref(productString ? JSON.parse(productString) : []);
let totalPrice = ref(0); // Inicializa el total en 0

const increaseQuantity = (product: any) => {
  if (product.quantity < product.maxQuantity) {
    product.quantity++;
    updateLocalStorage();
    calculateTotalPrice(); // Actualiza el total
  }
};

const decreaseQuantity = (product: any) => {
  if (product.quantity > 1) {
    product.quantity--;
    updateLocalStorage();
    calculateTotalPrice(); // Actualiza el total
  }
};

const updateLocalStorage = () => {
  localStorage.setItem("product", JSON.stringify(productStorage.value));
};

const calculateTotalPrice = () => {
  // Reinicia el total
  totalPrice.value = 0;
  // Itera sobre cada producto y suma sus precios totales
  for (const product of productStorage.value) {
    totalPrice.value += product.price * product.quantity;
  }
};

const cartStore = useCartStore();
const deleteProduct = (index: number) => {
  productStorage.value.splice(index, 1);
  updateLocalStorage();
  calculateTotalPrice();
  cartStore.removeFromCart(index);
};
// Calcula el total inicial al cargar la página
calculateTotalPrice();
</script>

<template>
  <main
    class="bg-color-1 flex justify-center min-h-screen text-xl font-bold text-color5"
  >
    <div v-if="productStorage.length > 0" class="container py-10">
      <!-- PRODUCTOS -->
      <v-table>
        <thead>
          <tr>
            <td class="text-left">Imagen</td>
            <td class="text-left">Producto</td>
            <td class="text-left">Color</td>
            <td class="text-left">Cantidad</td>
            <td class="text-left">Precio Unitario</td>
            <td class="text-left">Precio Total</td>
            <td class="text-left">Eliminar</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in productStorage" :key="prod._id">
            <th><img :src="prod.picture" alt="producto" class="w-14" /></th>
            <th>{{ prod.category }}</th>
            <th>{{ prod.colors[0] }}</th>
            <th class="flexx gap-3 items-center">
              <span
                class="cursor-pointer duration-300 text-xl font-bold text-red-500 hover:bg-red-300 px-2 py-1 rounded-md"
                @click="decreaseQuantity(prod)"
                >-</span
              >
              <span class="px-2">
                {{ prod.quantity }}
              </span>
              <span
                class="cursor-pointer duration-300 text-xl font-bold text-green-500 hover:bg-green-200 px-2 py-1 rounded-md"
                @click="increaseQuantity(prod)"
                >+</span
              >
            </th>
            <th>${{ prod.price }}</th>
            <th>${{ prod.price * prod.quantity }}</th>
            <th>
              <span
                class="cursor-pointer hover:bg-red-300 duration-300 p-2 rounded-md"
                @click="deleteProduct(index)"
                >❌</span
              >
            </th>
          </tr>
        </tbody>
      </v-table>

      <v-table class="my-4">
        <thead>
          <tr>
            <td>
              <p>Total: $ {{ totalPrice }}</p>
            </td>
          </tr>
        </thead>
      </v-table>
      <ResendButton :prod="productStorage" />
    </div>
    <p v-if="productStorage.length === 0">No hay productos</p>
  </main>
</template>
