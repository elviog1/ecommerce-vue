<template>
  <header
    class="bg-color3 flex justify-center z-20 sticky top-0 text-xl font-bold"
  >
    <div class="flex p-3 container justify-between items-center">
      <RouterLink to="/"
        ><img src="../assets/logo.png" alt="logo" class="w-16"
      /></RouterLink>

      <!-- MENUES -->
      <nav class="gap-3 sm:block hidden">
        <div class="flex gap-4 items-center">
          <RouterLink
            class="text-color5 duration-300 hover:bg-color2 hover:text-color1 rounded h-9 flex items-center px-1"
            to="/"
            >Inicio</RouterLink
          >
          <RouterLink
            class="text-color5 duration-300 hover:bg-color2 hover:text-color1 rounded h-9 flex items-center px-1"
            to="/products"
            >Productos</RouterLink
          >
          <RouterLink
            class="text-color5 duration-300 hover:bg-color2 hover:text-color1 rounded h-9 flex items-center px-1"
            to="/about"
            >Sobre mi</RouterLink
          >
          <RouterLink
            class="hover:bg-color2 rounded w-9 h-9 flex items-center justify-center relative"
            to="/cart"
          >
            <span
              v-if="productStorage"
              class="absolute top-0 right-0 text-xs"
              >{{ productCount }}</span
            >

            🛒</RouterLink
          >
        </div>
      </nav>
      <!-- BURGER -->
      <div class="sm:hidden block">
        <div class="flex gap-3 items-center">
          <img
            src="../assets/hamburger.svg"
            class="w-9 cursor-pointer hover:bg-color2 rounded"
            @click="openMenu"
            alt="Logo hamburger"
          />
          <RouterLink
            class="hover:bg-color2 rounded w-9 h-9 flex items-center justify-center relative"
            to="/cart"
          >
            <span
              v-if="productStorage"
              class="absolute top-0 right-0 text-xs"
              >{{ productCount }}</span
            >

            🛒</RouterLink
          >
        </div>
      </div>
    </div>
  </header>
  <div class="bg-color3" :class="{ hidden: !showMenu, block: showMenu }">
    <div class="flex flex-col">
      <RouterLink class="p-2 hover:bg-color2" @click="closeMenu" to="/"
        >Inicio</RouterLink
      >
      <RouterLink class="p-2 hover:bg-color2" @click="closeMenu" to="/products"
        >Productos</RouterLink
      >
      <RouterLink class="p-2 hover:bg-color2" @click="closeMenu" to="/about"
        >Sobre mi</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/counter";
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
const showMenu = ref(false);
const productString = localStorage.getItem("product");
const productStorage = ref(productString ? JSON.parse(productString) : []);
const openMenu = () => {
  showMenu.value = !showMenu.value; // Cambiar el valor de showMenu
};
const closeMenu = () => {
  showMenu.value = false;
};

const cartStore = useCartStore();

const productCount = computed(() => cartStore.getCartCount());
onMounted(() => {
  cartStore.loadCart();
});
</script>

<style scoped></style>
