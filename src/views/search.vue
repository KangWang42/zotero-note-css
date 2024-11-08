<template>
    <div>
      <input v-model="searchQuery" placeholder="Enter search terms...">
      <ul>
        <li v-for="card in filteredCards" :key="card.title">
          <h3>{{ card.title }}</h3>
          <p>{{ card.describe }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  
  export default {
    setup() {
      const searchQuery = ref('');
  
      const filteredCards = computed(() => {
        return cards.filter(card => card.describe.toLowerCase().includes(searchQuery.value.toLowerCase()));
      });
  
      return {
        searchQuery,
        filteredCards
      };
    }
  }
  </script>
  