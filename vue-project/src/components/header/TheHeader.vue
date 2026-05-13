<template>
  <header class="main-header">
    <Menubar :model="items">
      <template #start>
        <h2 class="logo">Find A Coach</h2>
      </template>

     <template #item="{ item }">
  <router-link
    :to="item.to"
    class="menu-link"
  >
    {{ item.label }}
  </router-link>
</template>

      <template #end>
        <div class="header-actions">
          <InputText placeholder="Search" type="text" />

          <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </header>
</template>
  
  <script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Avatar from "primevue/avatar";

export default {
  components: {
    Menubar,
    InputText,
    Avatar,
  },

  data() {
    return {
      items: [
        {
          label: "All Coaches",
          to: "/coaches",
        },
        {
          label: "Requests",
          to: "/requests",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.main-header {
  margin-bottom: 2rem;
}

.logo {
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
}

.menu-link {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>