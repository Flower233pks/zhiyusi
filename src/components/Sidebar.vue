<template>
  <div class="sidebar">
    <Logo @click="goHome" />
    <router-link to="/user" class="sidebar-link">
      <div class="user">
        <UserAvatar />
        <div class="user-label">我的</div>
      </div>
    </router-link>
    <router-link to="/care" class="sidebar-link" active-class="active-link">
      <img src="/icon/user-check.svg" class="icon" alt="关注" />
      <span>关注</span>
    </router-link>
    <router-link to="/categories" class="sidebar-link" active-class="active-link">
      <img src="/icon/tag.svg" class="icon" alt="分类" />
      <span>分类</span>
    </router-link>
    <router-link to="/about" class="sidebar-link" active-class="active-link">
      <img src="/icon/info.svg" class="icon" alt="关于" />
      <span>关于</span>
    </router-link>
    <div class = "auth">
      <AuthControl />
    </div>
   </div>
</template>

<script>
import AuthControl from './AuthControl.vue';
import UserAvatar from './UserAvatar.vue';
import Logo from './Logo.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Logo,
    AuthControl,
    UserAvatar
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.sidebar {
  z-index: 998244;
  background-color: rgb(107, 195, 236); 
  font-family: STZHONGS;
  color: #fff;
  height: 100vh;
  width: 122px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.5);
}

.sidebar-link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 5px 0; /* 调整边距 */
  padding: 10px 0; /* 增加内边距 */
  /*border-bottom: 1px solid #fff; /* 底部边框 */
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #444;
  color: #fff;
}

.sidebar-link .icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: brightness(0) invert(1); /* 确保图标颜色与背景相匹配 */
}

.auth {
  position: fixed; /* 绝对定位 */
  bottom: 10px; /* 底部对齐 */
  /* 添加其他必要的样式，如背景色、边框等 */
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #fff; /* 为用户部分添加边框 */
  padding-bottom: 10px; /* 底部内边距 */
  margin-bottom: 10px; /* 与下一个链接的间距 */
}
.active-link {
  background-color: rgba(255, 192, 203, 0471); /* 更暗的背景色 */
  color: white; /* 更亮的文字颜色 */
  padding-left: 4px solid #007bff; /* 左侧边框以示突出 */
}

.user-label {
  margin-top: 5px;
  color: #fff;
  font-size: 20px;
}

/* 如果需要的话，可以添加媒体查询来调整响应式布局 */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    overflow-x: auto;
  }
  .sidebar-link, .user {
    flex: 1 0 auto; /* 使链接在小屏幕上水平展开 */
  }
}
</style>
