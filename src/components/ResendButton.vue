<template>
  <div class="flex justify-center">
    <span
      @click="showAlert"
      class="bg-green-2002 duration-300 bg-green-400 cursor-pointer hover:bg-green-500 text-white py-2 px-5 rounded-md"
    >
      Solicitar pedido
    </span>
  </div>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2';
import { defineProps } from 'vue';

const product = defineProps({
  prod: Object
});

const showAlert = async () => {
  const { value: email } = await Swal.fire({
    title: "Ingrese su correo electronico",
    input: "email",
    inputPlaceholder: "ej: pequeñaaldea@gmail.com"
  });

  if (email) {
    try {
      const response = await fetch('http://localhost:4000/api/mails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: [email],
          subject: "Nueva Compra",
          content: product.prod
        })
      });

      if (response.ok) {
        Swal.fire(`Su pedido fue enviado. Muchas gracias.`);
      } else {
        throw new Error('Error al enviar el pedido.');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('¡Oops!', 'Hubo un error al enviar el pedido.', 'error');
    }
  }
};

console.log(product.prod);
</script>
