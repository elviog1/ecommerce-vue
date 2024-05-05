<template>
  <header class="bg-sky-300 flex justify-center sticky top-0">
    <div class="flex p-3 container justify-between">
      <h1>LOGO</h1>
      <!-- MENUES -->
      <nav class="gap-3 sm:block hidden">
        <div class="flex gap-3">
          <RouterLink class="hover:text-orange-700 duration-300" to="/"
            >Inicio</RouterLink
          >
          <RouterLink class="hover:text-orange-700 duration-300" to="/products"
            >Productos</RouterLink
          >
          <RouterLink class="hover:text-orange-700 duration-300" to="/about"
            >Sobre mi</RouterLink
          >
          <span>CAR</span>
        </div>
      </nav>
      <!-- BURGER -->
      <div class="sm:hidden block">
        <div class="flex gap-2">
          <span @click="openMenu">X</span>
          <span>CAR</span>
        </div>
      </div>
    </div>
  </header>
  <div class="" :class="{ hidden: !showMenu, block: showMenu }">
    <div class="flex flex-col bg-green-300">
      <RouterLink class="p-2 hover:bg-blue-400" @click="closeMenu" to="/"
        >Inicio</RouterLink
      >
      <RouterLink
        class="p-2 hover:bg-blue-400"
        @click="closeMenu"
        to="/products"
        >Productos</RouterLink
      >
      <RouterLink class="p-2 hover:bg-blue-400" @click="closeMenu" to="/about"
        >Sobre mi</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const showMenu = ref(false);
const openMenu = () => {
  showMenu.value = !showMenu.value; // Cambiar el valor de showMenu
};
const closeMenu = () => {
  showMenu.value = false;
};
</script>

<style scoped></style>
Y .... SI,
