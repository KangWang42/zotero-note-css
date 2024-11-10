<script setup>
import { ref, computed } from "vue";
import { cards} from "../cards.js"
import { copyCSS , highlightMatch} from "../script.js";
import template_card from './template_card.vue'


// Correct usage in a Vue 3 setup
const filteredCards = computed(() => {
    return cards.value.filter(card => card.tags.includes("背景"));
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
  