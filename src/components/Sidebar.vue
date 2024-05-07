<template>
    <section class="w-64 border-r-2 border-color5">
        <h2 class="text-center">Categoria</h2>
        <div class="p-4 flex flex-col gap-4">
            <RouterLink to="/products">Todos</RouterLink>
            <RouterLink to="/products/adornos">Adornos</RouterLink>
            <RouterLink to="/products/gorros">Gorros</RouterLink>
            <RouterLink to="/products/guantes">Guantes</RouterLink>
            <RouterLink to="/products/individuales">Individuales</RouterLink>
            <RouterLink to="/products/mantas">Mantas</RouterLink>
            <RouterLink to="/products/medias">Medias</RouterLink>
      </div>
    </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<style scoped>

</style>