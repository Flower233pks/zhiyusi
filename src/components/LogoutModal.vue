<template>
  <div class="modal-overlay" v-show="showModal">
    <div class="logout-modal">
     <h2>Confirm Logout ? </h2>
     <div class="button-container">
       <button @click="logout">Logout</button>
       <button @click="closeModal">Cancel</button>
     </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      showModal: false
    };
  },
  methods: {
    ...mapActions({
      logoutAction: 'logout'
    }),
    logout () {
      this.logoutAction().then(() => {
        this.$emit('close');
        // 处理登出成功的情况
      });
    },
    closeModal () {
      this.showModal = false;
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Hancock';
  src: url('assets/fonts/Hancock.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.modal-overlay {
  font-family: Hancock;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: 1;
}

.logout-modal {
  font-family: 'Hancock', sans-serif;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
}
.button-container {
  display: flex;
  justify-content: space-between; 
  width: 100%; 
  padding: 10px 0; 
}

button {
  font-family: 'Hancock', sans-serif; /* Ensure to have a fallback font */
  background-image: linear-gradient(to right, #4CAF50, #67C967); /* Gradient background */
  color: white;
  padding: 8px 12px;
  flex: 1; /* 两个按钮平分容器宽度 */
  margin: 10px;
  border: none;
  border-radius: 20px; /* More pronounced rounded corners for a modern look */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16); /* Soft shadow for depth */
  outline: none; /* Removes the outline to keep the design clean */
}

button:hover {
  background-color: #45a049; /* A simpler hover state if gradients are not preferred */
  transform: scale(1.05); /* Slightly increases size to give a lift effect */
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); /* Larger shadow for a 'pop' effect */
}

button:active {
  transform: scale(0.95); /* Subtle press-down effect */
}

button.cancel-button {
  background-image: linear-gradient(to right, #f44336, #f47777); /* Gradient background for cancel button */
}

button.cancel-button:hover {
  background-color: #da190b; /* Simpler hover state for cancel button */
}
</style>
