<script setup>
import { ref, computed } from "vue";
import { cards } from "../cards.js";
import { copyCSS, highlightMatch, filterc } from "../script.js";
import template_card from "./template_card.vue";
import searchinput from "./serchinput.vue";

const searchword = ref("");

const filteredCards = filterc(cards, "背景", searchword);
</script>


<template>
  <searchinput v-model="searchword" />
  <template_card :filteredCards="filteredCards" />
</template>



<style>
span.card {
  max-width: 30%;
}

input {
  margin: 10px 30px !important;
  border: grey 3px solid;
  border-radius: 15px;
  padding: 3px 20px;
  margin-bottom: 25px !important;
}

.card mark {
  background-color: rgb(224, 174, 146);
}
</style>

  