<template>
    <main
    class="bg-color-1 flex justify-center min-h-screen text-xl font-bold text-color5"
  >
    <div class="container">
      <p class="text-center">Productos</p>
      <div class="sm:flex-row flex gap-4 flex-col">
        <v-select
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
      <div class="flex gap-4 justify-center flex-wrap">

        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CardProduct from '@/components/CardProduct.vue';
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';


</script>

<style scoped>

</style>