<template>
<div class="modal-overlay" v-show="showModal">
  <div class="login-modal">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="button-container">
        <button type="submit">Login</button>
        <button @click="closeModal">Close</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      email: '',
      password: '',
      showModal: false
    };
  },
  methods: {
    ...mapActions({
      loginAction: 'login'
    }),
    login () {
      const credentials = {
        email: this.email,
        password: this.password
      };
      this.loginAction(credentials).then(() => {
        this.$emit('close');
        // 处理登录成功的情况
      }).catch(error => {
        console.error(error);
        // 处理登录失败的情况
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
}

.login-modal {
  font-family: 'Hancock', sans-serif;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
  width: 300px;

  /* 添加 Flexbox 属性以实现居中 */
  display: flex;
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 子元素水平居中 */
  justify-content: center; /* 子元素垂直居中 */
}


.modal-overlay[data-v-show="true"] {
  opacity: 1;
  visibility: visible;
}
.button-container {
  display: flex;
  justify-content: space-around; /* 按钮均匀分布在容器中 */
  width: 100%; /* 容器宽度与 login-modal 相同 */
}

.form-group {
  margin-bottom: 15px;
  color: #333;
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  font-family: 'Hancock', sans-serif; /* Ensure to provide a fallback font */
  background-image: linear-gradient(to right, #4CAF50, #5fb761); /* Gradient background */
  color: white;
  padding: 12px 20px; /* Slightly larger padding for a more prominent look */
  margin: 10px 10px 10px 10px ;
  border: none;
  border-radius: 25px; /* Rounded corners for a modern pill shape */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions for hover effects */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  outline: none; /* Removes the outline to keep the design clean */
}

button:hover {
  background-image: linear-gradient(to right, #45a049, #6fc06e); /* Lighter gradient on hover */
  transform: translateY(-2px); /* Slight lift */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Larger shadow on hover for a 'pop' effect */
}

button:active {
  transform: translateY(1px); /* Pushes the button down when clicked */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Resets the shadow to its original state */
}

.close-button {
  background-image: linear-gradient(to right, #f44336, #f77); /* Gradient background for close button */
}

.close-button:hover {
  background-image: linear-gradient(to right, #da190b, #f88); /* Lighter gradient on hover for close button */
}

</style>
