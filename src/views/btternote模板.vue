<script setup>
import { ref, computed } from "vue";
import { cards } from "../../public/cards.js";
import {  highlightMatch, filterc} from "../../public/script.js";
import template_card from '../components/template_card.vue'
import searchinput from '../components/serchinput.vue'

const searchword = ref("");


function copyCSS(cssFileName) {
    fetch(`/zotero-theme/${cssFileName}`)
        .then(response => response.text())
        .then(cssContent => {
            var tempInput = document.createElement('textarea');
            tempInput.value = cssContent;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('模板内容已复制!');
        })
        .catch(error => {
            console.error('Error fetching CSS:', error);
        });
}

const filteredCards = filterc(cards, 'betternote模板',searchword);


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

  