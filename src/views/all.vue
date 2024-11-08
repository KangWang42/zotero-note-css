<script setup>
import { ref, computed } from "vue";
import { cards } from "../cards.js";
import { copyCSS , highlightMatch} from "../script.js";

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
  <div class="flex flex-wrap justify-center gap-y-20 pb-32 gap-x-2">
    <span
      v-for="card in filteredCards"
      :key="card"
      class="card hover:scale-105 duration-500 hover:shadow-2xl relative h-auto mx-auto bg-gray-100 rounded-xl shadow-2xl min-w-72 w-1/4"
    >
      <div class="flex items-center p-3">
        <div class="px-1" v-for="dot in card.dots" :key="dot.color">
          <span
            :class="[
              'w-4 h-4 rounded-full inline-block cursor-pointer',
              dot.color,
            ]"
          ></span>
        </div>
      </div>
      <div class="text-center">
        <h1 class="pb-4 text-amber-800">{{ card.title }}</h1>
        <p>作者:{{ card.author }}</p>
      </div>
      <div class="pl-8">
        <h1 class="text-amber-500 pt-4">{{ card.subtitle }}</h1>
        <ol class="text-xs px-3 text-amber-950 font-bold">
          <li  class="py-2" v-for="detail in card.details" :key="detail" v-html="detail"></li>
        </ol>
      </div>
      <div class="overflow-y-scroll max-h-72">
        <img class="w-full" :src="card.image" alt="" />
      </div>
      <button
        @click="copyCSS(card.cssFile)"
        class="hover:bg-zinc-600 active:bg-zinc-800 absolute bottom-4 right-12 cursor-pointer bg-zinc-400 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
      >
        下载CSS
      </button>
    </span>
  </div>
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

  