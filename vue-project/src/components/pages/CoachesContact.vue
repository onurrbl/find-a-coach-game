<template>
    <div v-if="coach">
  
      <base-card>
  
        <div class="coach-info">
  
          <h2>
            {{ coach.firstName }} {{ coach.lastName }}
          </h2>
  
          <h3>
            \${{ coach.hourlyRate }}/hour
          </h3>
  
        </div>
  
      </base-card>
  
      <base-card>
  
        <form @submit.prevent="submitForm">
  
          <div class="form-control">
            <label>Email</label>
  
            <InputText
              v-model="email"
              type="email"
              placeholder="Your email"
            />
          </div>
  
          <div class="form-control">
            <label>Message</label>
  
            <Textarea
              v-model="message"
              rows="5"
              placeholder="Write your request..."
            />
          </div>
  
          <Button
            type="submit"
            label="Send Request"
          />
  
        </form>
  
      </base-card>
  
    </div>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';
  import Textarea from 'primevue/textarea';
  import Button from 'primevue/button';
  
  export default {
  
    components: {
      InputText,
      Textarea,
      Button
    },
  
    data() {
      return {
        email: '',
        message: ''
      };
    },
  
    computed: {
      coachName() {
        return this.$route.params.name;
      },
  
      coach() {
        return this.$store.state.coaches.find(
          coach =>
            coach.firstName.toLowerCase() ===
            this.coachName.toLowerCase()
        );
      }
    },
  
    methods: {
      submitForm() {
  
        const request = {
          coachId: this.coach.id,
          coachName: this.coach.firstName,
          userEmail: this.email,
          message: this.message
        };
  
        this.$store.commit('addRequest', request);
  
        console.log(this.$store.state.requests);
  
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .coach-info {
    margin-bottom: 1rem;
  }
  </style>