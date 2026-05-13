<script>
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';

export default {
  components: {
    Button,
    SelectButton
  },

  props: {
    firstName: String,
    lastName: String,
    rate: Number,
    areas: Array
  },

  computed: {
    coach() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        rate: this.rate,
        areas: this.areas
      };
    }
  }
}
</script>

<template>
  <base-card>
    <router-link to="">
      <div v-if="coach" class="coach-item">
        <div class="coach-info">
          <h2>{{ firstName }} {{ lastName }}</h2>

          <h3>\${{ rate }}/hour</h3>

          <SelectButton :modelValue="areas[0]" :options="areas" />
        </div>

        <div class="actions">
          <router-link :to="`/${firstName.toLowerCase()}/contact`">
            <Button label="Contact" outlined />
          </router-link>
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