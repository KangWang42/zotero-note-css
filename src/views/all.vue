<script setup>
import { ref, computed } from "vue";
import { cards } from "../cards.js";
import { copyCSS , highlightMatch} from "../script.js";
import template_card from './template_card.vue'


const searchword = ref("");

const filteredCards = computed(() => {
    if (!searchword.value.trim()) {
      return cards.value;
    }
    return cards.value.filter(card =>
      card.details.some(detail => detail.toLowerCase().includes(searchword.value.toLowerCase()))
    ).map(card => ({
      ...card,
      details: card.details.map(detail => highlightMatch(detail, searchword.value))
    }));
  });


</script>


<template>
  <input
    v-model="searchword"
    type="text"
    placeholder="根据介绍搜索CSS..."
    class="search-box"
  />
 <template_card :filteredCards="filteredCards"/>
</template>



<style>
span.card {
  max-width: 30%;
}

input {
  margin: 10px 30px!important;
  border: grey 3px solid;
  border-radius: 15px;
  padding: 3px 20px;
  margin-bottom: 25px!important;

}

.card mark{
  background-color: rgb(224, 174, 146);
}


</style>

  