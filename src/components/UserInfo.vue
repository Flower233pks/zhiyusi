<template>
  <div class="user-info">
    <div class="fuckbg">
    <div class="background">
      <img :src="user.background" alt="Background">
    </div>
    </div>
    <div class="basic-info">
      <img :src="user.icon" alt="User Icon" class="icon">
      <h1>{{ user.name }}</h1>
      <p>uid:{{ user.id }}</p>
      <p>{{ user.bio }}</p>
      <div class="stats">
        <span>点赞量: {{ user.approve }}</span> 
        <span>收藏量: {{ user.collect }}</span> 
        <span>粉丝量: {{ user.fans }}</span>
      </div>
      <span class="toggle-text" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '[了解更多]' : '[收起]' }}
      </span>
      <div v-if="!isCollapsed">
      <p>电话: {{ user.tel }}</p>
      <p>性别: {{ user.gender }}</p>
      <p>邮箱: {{ user.email }}</p>
      <p>Reputation: {{ user.reputation }}</p>
      </div>
    </div>
    <div v-if="isCurrentUser && isLoggedIn" class="edit-button">
      <button @click="showEditUserInfo = true">
        <img src="/icon/edit.svg" class="edit-icon" alt="编辑信息" />
        <span>编辑信息</span>
      </button>
      <EditUserInfo v-if="showEditUserInfo" :user="user" @close="showEditUserInfo = false" />
    </div>
    <CreateNewArticle v-if="isLoggedIn" />
    <hr class="divider" />
    <div class="fancy-divider">
      <span class="divider-symbol" v-for="(symbol, index) in dividerSymbols" :key="'left-' + index">{{ symbol }}</span>
      <span class="divider-text"><b>文章</b></span>
      <span class="divider-symbol" v-for="(symbol, index) in dividerSymbols" :key="'right-' + index">{{ symbol }}</span>
    </div>
    <div class = 'userarticles'>
    <Articles /> 
    </div>
  </div>
</template>

<script>
import EditUserInfo from './EditUserInfo.vue';
import Articles from './Articles.vue';
import CreateNewArticle from './CreateNewArticle.vue';
import { mapState } from 'vuex'; // 假设使用 Vuex 来管理登录状态

export default {
  components: {
    Articles,
    EditUserInfo,
    CreateNewArticle
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateDividerSymbols);
  },
  data() {
    return {
      showEditUserInfo: false,
      showArticleForm: false,
      isCollapsed: true,
      dividerSymbols: [],
      user: {
        background: '/images/user-background.jpg', // 背景图片路径
        icon: '/author/ddh.jpg',            // 用户头像路径
        name: '大大花030',                             // 用户名
        id: '0000001',                        // 用户账号
        bio: '追逐影子的人，自己就是影子。',              // 个人签名
        approve: 120,                             // 被点赞量
        collect: 75,                              // 被收藏量
        fans: 114514,
        tel: '123-456-7890',                      // 电话
        gender: '男',                             // 性别
        email: 'zhangsan@example.com',            // 邮箱
        reputation: 200                           // 荣誉值
      }
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.isLoggedIn // 假设存储登录状态的字段
    }),
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
    this.updateDividerSymbols();
    window.addEventListener('resize', this.updateDividerSymbols);
  },
  methods: {
    async fetchUserData() {
      // 假设有一个函数来获取用户数据
      // const response = await getUserData(this.userid);
      // this.user = response.data;

      // 目前使用模拟数据
      this.user = {
        background: '/background/bg1.jpg', // 背景图片路径
        icon: '/author/ddh.jpg',            // 用户头像路径
        name: '大大花030',                             // 用户名
        id: '0000001',                        // 用户账号
        bio: '追逐影子的人，自己就是影子。',             // 个人签名
        approve: 120,                             // 被点赞量
        collect: 75,                              // 被收藏量
        fans: 114514,
        tel: '123-456-7890',                      // 电话
        gender: '男',                             // 性别
        email: 'zhangsan@example.com',            // 邮箱
        reputation: 200 
      };
    },
    openCreateArticlePage() {
      const url = this.$router.resolve({ path: '/create-article' }).href;
      window.open(url, '_blank');
    },
    updateDividerSymbols() {
      const symbolWidth = 56; // 假设每个符号（包括间隔）大约占据20px
      const parentWidth = this.$el.parentElement.offsetWidth;
      const availableSpace = parentWidth - 100; // 假设保留一些边距
      let symbolCount = Math.floor(availableSpace / symbolWidth);
      if (symbolCount % 2 === 0) {
        symbolCount--;
      }
      this.dividerSymbols = new Array(0);
      for (let i = 0; i < symbolCount; i++) {
        this.dividerSymbols.push(i % 2 === 0 ? '#' : '%');
      }
    }
  }
};
</script>

<style scoped>
.user-info {
  z-index: 100;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color:aliceblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 70%;
  margin: auto;
}

.fuckbg{
  width: 100%;
  height: 200px; /* 容器高度设置为300px */
  overflow: hidden; /* 隐藏超出容器的图片部分 */
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: -1;
  bottom: 0;
}

.background img  {
  width: 100%;
  height: auto;
  object-fit: cover; /* 确保图片覆盖整个容器 */
  object-position: center; /* 图片在容器中垂直居中 */
  position: absolute;
  top: 50%;
  transform: translateY(-57%); /* 垂直居中图片 */
}

.basic-info {
  text-align: center;
  padding: 0px;
  margin-top: 0px;
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
  margin: 10px 10px 0 0 ;
}

.stats span {
  background-color: #e7e7e7;
  padding: 5px 10px;
  margin: 0 5px 5px 0;
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
  top: 25px; /* 距离顶部的距离 */
  right: 25px; /* 距离右侧的距离 */
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

.floating-button {
  position: fixed;
  bottom: 20px; /* 调整为所需位置 */
  right: 20px;
  /* 其他按钮样式 */
}
.toggle-text {
  color: grey;
  cursor: pointer;
}

/* 当鼠标悬停时，可以改变颜色来增强交互效果 */
.toggle-text:hover {
  color: darkgray;
}

.fancy-divider {
  text-align: center;
  padding: 10px 0;
  color: #4a90e2; /* 您可以根据设计需要调整颜色 */
  font-size: 20px; /* 调整符号的大小 */
  margin-bottom: 10px;
}

.divider-symbol {
  margin: 0 2px; /* 根据需要调整符号之间的间距 */
  display: inline-block;
  opacity: 0.7;
}

.divider-text {
  font-size: 24px; /* 文本大小可能需要大一些 */
  margin: 0 10px; /* 文本两边的间距 */
}

.divider {
  border: none;
  height: 2px;
  width: 100%;
  background: linear-gradient(to right, #79c3ff, #bd93f9); /* 渐变色 */
  margin: 20px 0 -2px 0;
  z-index: 1001;
}

.userarticles{
  width: 100%;
  background-color:#f2f2f2;
  margin: 0px -5px 0px -5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>

