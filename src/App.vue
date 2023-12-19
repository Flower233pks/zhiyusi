<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar
  }
};
</script>

<style>
.content {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 20px; /* Space for the main content */
}

/* Other styles */
</style>
