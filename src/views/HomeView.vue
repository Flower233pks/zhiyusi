<template>
  <div class="home-view">
    <Articles /> <!-- 调用 Articles 组件，设定列数为 3 -->
  </div>
</template>

<script>
import Articles from '@/components/Articles.vue'; // 确保路径正确

export default {
  name: 'HomeView',
  components: {
    Articles // 注册 Articles 组件
  }
};
</script>

<style scoped>
.home-view {
  max-width: 1200px; /* 设置最大宽度 */
  margin: 0 auto; /* 水平居中 */
  padding: 20px; /* 内边距 */
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 竖直排列子元素 */
  align-items: center; /* 子元素水平居中 */
  gap: 20px; /* 子元素间的间距 */
}

/* 如果有必要，可以添加媒体查询来调整响应式布局 */
@media (max-width: 768px) {
  .home-view {
    padding: 10px; /* 较小屏幕的内边距 */
  }
}
</style>
