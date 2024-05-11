// cart.ts
import { defineStore } from "pinia";

export const useCartStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    // Agregar un producto al carrito
    addToCart(product: Product) {
      this.products.push(product);
      this.persistCart();
    },
    // Obtener el número de productos en el carrito
    getCartCount(): number {
      return this.products.length;
    },
    // Guardar el carrito en localStorage
    persistCart() {
      localStorage.setItem("product", JSON.stringify(this.products));
    },
    // Cargar el carrito desde localStorage
    loadCart() {
      const cart = localStorage.getItem("product");
      if (cart) {
        this.products = JSON.parse(cart);
      }
    },
    removeFromCart(index: number) {
      this.products.splice(index, 1);
      this.persistCart();
    },
  },
});

interface Product {
  title: string;
  description: string;
  picture: string;
  colors: string[];
  price: number;
  quantity: number;
  maxQuantity: number;
}
