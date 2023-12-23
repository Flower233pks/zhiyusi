<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>注册</h2>
      <form @submit.prevent="handleRegister" class="register-form">
        <!-- 用户名 -->
        <div class="form-group">
          <label for="zcusername">用户名:</label>
          <input type="text" id="zcusername" v-model="user.username" required>
        </div>

        <!-- 邮箱 -->
        <div class="form-group">
          <label for="zcemail">邮箱:</label>
          <input type="email" autocomplete="off" id="zcemail" v-model="user.email" required>
        </div>

        <!-- 密码 -->
        <div class="form-group">
          <label for="zcpassword">密码:</label>
          <input type="password" autocomplete="off" id="zcpassword" v-model="user.password" required>
        </div>
        
        <!-- 确认密码 -->
        <div class="form-group">
          <label for="zcconfirmPassword">确认密码:</label>
          <input type="password" autocomplete="off" id="zcconfirmPassword" v-model="confirmPassword" required>
        </div>
        
        <!-- 注册按钮 -->
        <div class="button-container">
          <button type="submit" @click="showDialog" class="btn">注册</button>
          <button type="button" @click="closeModal" class="btn close-button">返回登录</button>
        </div>
      </form>
    </div>
    <div v-show="showSuccessDialog" class="success-dialog">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        nickname: '',
        email: '',
        password: ''
      },
      confirmPassword: '',
      showSuccessDialog: false,
      successMessage: ''
    };
  },
  methods: {
    handleRegister() {
      // 注册逻辑
      if (this.user.password !== this.confirmPassword) {
        alert('密码和确认密码不匹配，检查一下');
        return;
      }
      console.log('注册:', this.user);
    },
    showDialog(){
      this.successMessage = '😊 注册成功！🎉';
      this.showSuccessDialog = true;
      setTimeout(() => {
        this.showSuccessDialog = false;
      }, 3000);
      setTimeout(() => {
        this.closeModal();
      }, 3200);
    },
    closeModal() {
      this.$emit('close'); // 发出关闭事件
      this.$emit('showLogin'); // 发出关闭事件
    }
  }
};
</script>

<style scoped>

.success-dialog {
  font-family: STZHONGS;
}

@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.modal-overlay {
  font-family: STZHONGS;
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

.modal-content {
  background-color: white;
  color: black ;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.btn {
  font-family: STZHONGS;
  background-image: linear-gradient(to right, #4CAF50, #5fb761);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background-image: linear-gradient(to right, #45a049, #6fc06e);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.close-button {
  background-image: linear-gradient(to right, #f44336, #f77);
}

.close-button:hover {
  background-image: linear-gradient(to right, #da190b, #f88);
}

.success-dialog {
  position: fixed; /* 固定位置 */
  top: 10px; /* 顶部对齐 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 确保准确居中 */
  background-color:white; /* 浅绿色背景，常用于成功消息 */
  color:#000; /* 深绿色文字 */
  padding: 10px 20px; /* 内边距 */
  border-radius: 5px; /* 圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 轻微阴影 */
  z-index: 1000; /* 确保在最顶层显示 */
  opacity: 1; /* 初始透明度，用于淡入效果 */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
/* 当 success-dialog 存在于 DOM 中时，改变其透明度和位置以实现淡入效果 */
.success-dialog-enter-active {
  opacity: 1;
  transform: translateX(-50%) translateY(20px); /* 轻微下移以增加动效 */
}

/* 淡出效果 */
.success-dialog-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px); /* 轻微上移 */
}
</style>
