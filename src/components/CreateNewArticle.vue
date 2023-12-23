<template>
  <div class="create-article-container">
    <!-- 浮动按钮 -->
    <button class="floating-button" @click="createArticle">
      <img src="/icon/file-plus.svg" alt="Icon" class="button-icon">
      <span>写点东西</span>
    </button>
  </div>
</template>

<script>
import ArticleEdit from './ArticleEdit.vue';

export default {
  components: {
    ArticleEdit
  },
  data() {
    return {
      showArticleForm: false
    };
  },
  methods: {
    createArticle() {
      this.$router.push({ path: '/create-article' });
    }
  }
};
</script>

<style scoped>
.create-article-container {
  position: relative;
  /* 其他样式 */
}
.floating-button {
  font-family: STZHONGS;
  position: fixed;
  bottom: 20px; /* 距离底部的位置 */
  right: 20px; /* 距离右侧的位置 */
  background-color: #f0f0f0; /* 清淡的背景颜色 */
  color: #000; /* 深色文字 */
  border: 2px solid #ddd; /* 边框 */
  border-radius: 50%; /* 圆形按钮 */
  width: 86px; /* 按钮宽度 */
  height: 86px; /* 按钮高度 */
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 轻微的阴影 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* 文字阴影，增强可读性 */
  transition: transform 0.3s, box-shadow 0.3s; /* 鼠标悬停效果 */
}

.floating-button:hover {
  background-color: rgba(255, 192, 203, 0.89); /* 鼠标悬停时背景色变深 */
  transform: translateY(-6px) translateX(-6px); /* 悬停时轻微上移 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 悬停时阴影增强 */
}

.button-icon {
  width: 24px; /* 图标大小 */
  height: 24px;
  margin-bottom: 7px; 
}

</style>
