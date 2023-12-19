<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>编辑个人信息</h2>
      <form @submit.prevent="saveChanges" class="edit-form">
        <div class="form-row">
          <div class="form-group">
            <label for="background">主页背景:</label>
            <input type="text" id="background" v-model="editableUser.background">
          </div>
          <div class="form-group">
            <label for="icon">头像:</label>
            <input type="text" id="icon" v-model="editableUser.icon">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="name">昵称:</label>
            <input type="text" id="name" v-model="editableUser.name">
          </div>
          <div class="form-group">
            <label for="bio">个人签名:</label>
            <input type="text" id="bio" v-model="editableUser.bio">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="tel">电话:</label>
            <input type="tel" id="tel" v-model="editableUser.tel">
          </div>
          <div class="form-group">
            <label for="gender">性别:</label>
            <select id="gender" v-model="editableUser.gender">
              <option value="male">男</option>
              <option value="female">女</option>
              <option value="other">其他</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="email">邮箱:</label>
            <input type="email" id="email" v-model="editableUser.email">
          </div>
          <div class="form-group">
            <label for="password">密码:</label>
            <input type="password" id="password" v-model="editableUser.pwd">
          </div>
        </div>
        <div class = "btngroup">
           <button type="submit" class="btn">保存</button>
           <button type="button" @click="closeModal" class="btn">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  data() {
    return {
      editableUser: { ...this.user }
    };
  },
  methods: {
    saveChanges() {
      // 实现保存逻辑，比如发送 API 请求更新用户信息
      console.log('保存的用户信息:', this.editableUser);
      this.$emit('close');
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script><style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  max-width: 500px; /* 控制模态框宽度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-form {
  width: 100%;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child {
  margin-right: 0;
}

.form-group label {
  margin-bottom: 5px;
  text-align: center;
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group input[type="email"],
.form-group input[type="password"],
.form-group select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 30px 0 30px ;
  flex: 0.5; /* 使按钮等长 */
}

.btn:hover {
  background-color: #0056b3;
}

/* 为按钮组添加额外的样式 */
.btngroup {
  display: flex;
  justify-content: space-between;
  width: 100%; /* 控制按钮组宽度 */
  margin-top: 10px;
}
</style>
