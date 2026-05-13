<template>

    <div>
  
      <h1>Requests</h1>
  
      <div v-if="hasRequests">
  
        <base-card
          v-for="request in requests"
          :key="request.userEmail + request.coachId"
        >
  
          <div class="request-item">
  
            <h3>
              Coach: {{ request.coachName }}
            </h3>
  
            <p>
              <strong>Email:</strong>
              {{ request.userEmail }}
            </p>
  
            <p>
              <strong>Message:</strong>
              {{ request.message }}
            </p>
  
          </div>
  
        </base-card>
  
      </div>
  
      <h3 v-else>
        No requests found.
      </h3>
  
    </div>
  
  </template>
  
  <script>
  export default {
  
    computed: {
  
      requests() {
        return this.$store.getters.requests;
      },
  
      hasRequests() {
        return this.requests &&
               this.requests.length > 0;
      }
    }
  }
  </script>
  
  <style scoped>
  .request-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  </style>