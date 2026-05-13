<template>
  <div class="coaches-container">
    <base-card>
      <div class="filters">
        <h2>Find Your Coach</h2>
        <div class="filter-option">
          <Checkbox
            v-model="activeFilters.frontend"
            inputId="frontend"
            binary
          />
          <label for="frontend">Frontend</label>
        </div>

        <div class="filter-option">
          <Checkbox v-model="activeFilters.backend" inputId="backend" binary />
          <label for="backend">Backend</label>
        </div>

        <div class="filter-option">
          <Checkbox v-model="activeFilters.career" inputId="career" binary />
          <label for="career">Career</label>
        </div>
      </div>
    </base-card>

    <base-card>
      <coaches-item
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </base-card>
  </div>
</template>
  
  <script>
import CoachesItem from "../CoachesItem.vue";
import Checkbox from "primevue/checkbox";
import CheckboxGroup from "primevue/checkboxgroup";

export default {
  components: {
    CoachesItem,
    Checkbox,
    CheckboxGroup,
  },

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  computed: {
    coaches() {
      return this.$store.state.coaches;
    },

    filteredCoaches() {
      return this.coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }

        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }

        return false;
      });
    },
  },

  methods: {
    setFilter(event) {
      const inputId = event.target.id;

      this.activeFilters[inputId] = event.target.checked;
    },
  },
};
</script>
  
  <style scoped>
.coaches-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.filters {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

h2 {
  margin: 0;
  margin-right: 1rem;
}
</style>