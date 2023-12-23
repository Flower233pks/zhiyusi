<template>
  <div class = "authDo">
    <button v-if="!isLoggedIn" @click="showLogin">登录</button>
    <button v-else @click="showLogout">登出</button>
    <LoginModal v-show="showLoginModal" @close="showLoginModal = false" 
    @openRegister="openRegisterModal" ref="loginModal"/>
    <LogoutModal v-show="showLogoutModal" @close="showLogoutModal = false" ref="logoutModal"/>
    <RegisterModal v-show="showRegisterModal" @close="showRegisterModal = false" 
    @showLogin="showLogin" ref="registerModal"/>
  </div>
</template>

<script>
import LoginModal from './LoginModal.vue';
import LogoutModal from './LogoutModal.vue';
import RegisterModal from './RegisterModal.vue';
import { mapState } from 'vuex';

export default {
  components: {
    LoginModal,
    LogoutModal,
    RegisterModal
  },
  data () {
    return {
      showLoginModal: false,
      showLogoutModal: false,
      showRegisterModal: false
    };
  },
  methods: {
    showLogin () {
      this.showLoginModal = true;
      this.showRegisterModal = false;
      this.$nextTick(() => {
        if (this.$refs.loginModal) {
          this.$refs.loginModal.showModal = true;
        }
      });
    },
    showLogout () {
      this.showLogoutModal = true;
      this.$nextTick(() => {
        if (this.$refs.logoutModal) {
          this.$refs.logoutModal.showModal = true;
        }
      });
    },
    openRegisterModal() {
      this.showLoginModal = false;
      this.showRegisterModal = true;
      this.$nextTick(() => {
        if (this.$refs.registerModal) {
          this.$refs.registerModal.showModal = true;
        }
      });
    }
  },
  computed: {
    ...mapState(['isLoggedIn'])
  }
};
</script>

<style scoped>
.authDo{
  z-index: 998244 ;
}

@font-face {
  font-family: 'smileysans';
  src: url('assets/fonts/smileysans.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

button {
  font-family: STZHONGS;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-image: linear-gradient(45deg, #ff6ef3, rgb(146, 225, 243)); /* Gradient background */
  color: black;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth transition */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  outline: none;
}

button:hover {
  transform: translateY(-3px); /* Lift effect */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
}

button:active {
  transform: translateY(1px); /* Pressed effect */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2); /* Reset shadow */
}

/* Login and Logout Modal Styles */
.login-modal, .logout-modal {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  transform: scale(0.9);
  opacity: 0;
}

</style>
