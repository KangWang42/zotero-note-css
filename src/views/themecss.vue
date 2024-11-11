<script setup>
import { computed } from "vue";
import { cards } from "../cards.js";
import { copyCSS } from "../script.js";
import template_card from "../components/template_card.vue";
import searchinput from "../components/serchinput.vue";
// Correct usage in a Vue 3 setup
const filteredCards = computed(() => {
  return cards.value.filter((card) => card.tags.includes("主题"));
});
</script>


<template>
  <searchinput v-model="searchword" />
  <template_card :filteredCards="filteredCards" />
</template>
 

<style>
span.card {
  max-width: 30%;
}
</style>
  