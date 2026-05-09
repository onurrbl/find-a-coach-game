<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import TheHeader from './components/header/TheHeader.vue';

const value = ref('');
</script>

<template>
  <the-header></the-header>
  <span>Prime Vue</span>

  <InputText type="text" v-model="value" />
  <input type="text">
  
</template>

<style scoped>

</style>