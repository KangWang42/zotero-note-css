<script setup>
import { ref, computed } from "vue";
import { cards } from "../../public/cards.js";
import { copyCSS , highlightMatch, filterc} from "../../public/script.js";
import template_card from '../components/template_card.vue'
import searchinput from '../components/serchinput.vue'

const searchword = ref("");

const filteredCards = filterc(cards, '',searchword);


</script>


<template>
<searchinput v-model="searchword"/>
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

  