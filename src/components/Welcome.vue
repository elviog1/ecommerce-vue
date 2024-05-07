<template>
  <div class="flex justify-center py-5">
    <div class="container flex justify-center items-center gap-4 flex-wrap">
      <div class="flex flex-col items-center gap-10 py-4 text-xl text-color5 max-w-96">
        <p class="text-2xl">
          ¡Bienvenidos a mi página web! Aquí encontrarás una colección única de productos elaborados con amor y creatividad utilizando la técnica del crochet. Desde acogedoras prendas de vestir hasta encantadores accesorios para el hogar, cada pieza está tejida a mano con la suavidad y calidez de la lana. ¡Explora, disfruta y déjate envolver por la magia del crochet!
        </p>
        <RouterLink to="/products" class=" py-2 px-6 rounded text-color5 hover:text-color1 hover:scale-105 duration-500 font-bold border-color2 border-2 hover:bg-color3">Conoce nuestros productos</RouterLink>
      </div>
      <img src="../assets/banner.png" alt="logo" class=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
