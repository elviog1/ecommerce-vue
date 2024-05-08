<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AOS from 'aos';
AOS.init();
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>
