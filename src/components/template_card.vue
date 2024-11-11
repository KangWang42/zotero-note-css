
<template>
  <div class="flex flex-wrap justify-around gap-y-20 pb-32 gap-x-2 items-start">
    <span
      v-for="card in filteredCards"
      :key="card"
      class="pt-4 card hover:scale-105 duration-500 hover:shadow-2xl relative self-auto h-auto bg-gray-100 rounded-xl shadow-2xl min-w-72 w-1/4"
    >
      <div class="text-center">
        <h1 class="pb-2 px-4  text-lime-950 font-bold text-lg font-mono">{{ card.title }}</h1>
        <p  class="text-amber-800 ">作者:{{ card.author }}</p>
      </div>
      <div class="pl-8">
        <h1 class="text-blue-900">{{ card.subtitle }}</h1>
        <ol class="text-xs px-3 text-amber-950 font-bold">
          <li
            class="py-2"
            v-for="detail in card.details"
            :key="detail"
            v-html="detail"
          ></li>
        </ol>
      </div>
      <div class="scrollbar overflow-y-scroll max-h-72 ">
        <img class="w-full" :src="card.image" alt="" />
      </div>
      <button
        @click="copyCSS(card.cssFile)"
        class="hover:bg-zinc-400 active:bg-slate-400 absolute bottom-4 right-12 cursor-pointer bg-slate-400 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
      >
        下载CSS
      </button>
    </span>
  </div>
</template>
  

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  filteredCards: Array,
});

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
            alert('内容复制成功!');
        })
        .catch(error => {
            console.error('Error fetching CSS:', error);
        });
}

</script>

<style scope>
/* 自定义滚动条样式 */
.scrollbar::-webkit-scrollbar {
  width: 4px; /* 滚动条的宽度 */
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(100, 116, 139, 0.7); /* 滑块颜色 */
  border-radius: 8px; /* 圆角滑块 */
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 116, 139, 0.9); /* 悬停时颜色 */
}

.scrollbar::-webkit-scrollbar-track {
  background-color: rgba(232, 235, 229, 0.4); /* 滚动条轨道颜色 */
  border-radius: 8px;
}
.card:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

</style>