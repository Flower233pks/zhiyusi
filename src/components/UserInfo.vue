<template>
  <div class="user-info">
    <div class="background">
      <!-- 假设背景是一张图片 -->
      <img :src="user.background" alt="Background">
    </div>
    <div class="basic-info">
      <img :src="user.icon" alt="User Icon" class="icon">
      <h1>{{ user.name }}</h1>
      <p>{{ user.id }}</p>
      <p>{{ user.bio }}</p>
      <div class="stats">
        <span>点赞量: {{ user.approve }}</span>
        <span>收藏量: {{ user.collect }}</span>
      </div>
      <p>电话: {{ user.tel }}</p>
      <p>性别: {{ user.gender }}</p>
      <p>邮箱: {{ user.email }}</p>
      <p>荣誉: {{ user.reputation }}</p>
    </div>
    <div v-if="isCurrentUser" class="edit-button">
      <button @click="showEditModal = true">
        <img src="/icon/edit.svg" class="edit-icon" alt="编辑信息" />
        <span>编辑信息</span>
      </button>
      <EditModal v-if="showEditModal" :user="user" @close="showEditModal = false" />
    </div>

  </div>
</template>

<script>
import EditModal from './EditModal.vue';

export default {
  components: {
    EditModal
  },
  data() {
    return {
      showEditModal: false,
      user: {
        background: '/images/user-background.jpg', // 背景图片路径
        icon: '/images/user-icon.jpg',            // 用户头像路径
        name: '张三',                             // 用户名
        id: 'zhangsan123',                        // 用户账号
        bio: '这是一个个人简介示例。',              // 个人签名
        approve: 120,                             // 被点赞量
        collect: 75,                              // 被收藏量
        tel: '123-456-7890',                      // 电话
        gender: '男',                             // 性别
        email: 'zhangsan@example.com',            // 邮箱
        reputation: 200                           // 荣誉值
      }
    };
  },
  computed: {
    isCurrentUser() {
      // 假设 currentUserId 是从 Vuex 或某种全局状态获取的
      return 1;//this.userid === this.currentUserId;
    },
    // ... 其他计算属性 ...
  },
  props: {
    userid: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      // 假设有一个函数来获取用户数据
      // const response = await getUserData(this.userid);
      // this.user = response.data;

      // 目前使用模拟数据
      this.user = {
        background: '/images/user-background.jpg', // 背景图片路径
        icon: '/images/user-icon.jpg',            // 用户头像路径
        name: '张三',                             // 用户名
        id: 'zhangsan123',                        // 用户账号
        bio: '这是一个个人简介示例。',              // 个人签名
        approve: 120,                             // 被点赞量
        collect: 75,                              // 被收藏量
        tel: '123-456-7890',                      // 电话
        gender: '男',                             // 性别
        email: 'zhangsan@example.com',            // 邮箱
        reputation: 200 
      };
    }
  }
};
</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

.background img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.basic-info {
  text-align: center;
  padding: 15px;
}

.icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-top: -50px; /* 让头像部分浮在背景图片上 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.stats {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
}

.stats span {
  background-color: #e7e7e7;
  padding: 5px 10px;
  border-radius: 5px;
}

/* 其他个人信息的样式 */
.basic-info h1, .basic-info p {
  margin: 5px 0;
}

/* 特别为电话、性别等信息添加样式 */
.basic-info p {
  color: #555;
  font-size: 0.9em;
}

/* 邮箱和荣誉信息样式 */
.basic-info p:last-child {
  margin-top: 10px;
  font-weight: bold;
}
.edit-button {
  position: absolute; /* 绝对定位 */
  top: 10px; /* 距离顶部的距离 */
  right: 10px; /* 距离右侧的距离 */
  z-index: 1000; /* 确保按钮在其他元素之上 */
}

button {
  font-family: STZHONGS ;
  display: flex; /* 使用弹性布局 */
  align-items: center; /* 垂直居中图标和文本 */
  background-color: #007bff; /* 按钮背景颜色 */
  color: white; /* 文本颜色 */
  padding: 8px 12px; /* 内边距 */
  border: none; /* 无边框 */
  border-radius: 4px; /* 圆角边框 */
  cursor: pointer; /* 手形光标 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 阴影效果 */
}

.edit-icon {
  width: 20px; /* 图标大小 */
  height: 20px;
  filter: brightness(0) invert(1);
  margin-right: 5px; /* 图标和文本之间的距离 */
}
</style>

