<script setup>
import { ref, computed } from "vue";
import { cards } from "../cards.js";
import { copyCSS } from "../script.js";
import template_card from './template_card.vue'

const filteredCards = computed(() => {
  return cards.value.filter((card) => card.tags.includes("其它"));
});
</script>


<template>
 <template_card :filteredCards="filteredCards"/>
</template>



<style>
span.card {
  max-width: 30%;
}
</style>
  