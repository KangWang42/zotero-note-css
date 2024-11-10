<script setup>
import { ref, computed } from "vue";
import { cards} from "../cards.js"
import template_card from './template_card.vue'


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


// Correct usage in a Vue 3 setup
const filteredCards = computed(() => {
    return cards.value.filter(card => card.tags.includes("betternote模板"));
});

</script>




<template>
  <blockquote>更多内容还是参考插件库的 <a href="https://github.com/windingwind/zotero-better-notes/discussions/categories/note-templates">模板讨论 </a> </blockquote>
 <template_card :filteredCards="filteredCards"/>
</template>






<style>
span.card {
  max-width: 30%;
}
</style>
  