<script setup>
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";

defineProps({
  firstName: String,
  lastName: String,
  rate: Number,
  areas: Array,
});
</script>

<template>
  <base-card>
  <router-link to="">
      <div class="coach-item">
        <div class="coach-info">
          <h2>{{ firstName }} {{ lastName }}</h2>
  
          <h3>\${{ rate }}/hour</h3>
  
          <SelectButton :modelValue="areas[0]" :options="areas" />
        </div>
  
        <div class="actions">
          <Button label="Contact" outlined />
          <Button label="View Details" />
        </div>
      </div>


  </router-link>
  </base-card>
</template>

<style scoped>
.coach-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
}

.coach-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}

h2,
h3 {
  margin: 0;
}
</style>