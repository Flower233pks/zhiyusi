<template>
  <div class="user-avatar">
    <img :src="'/' + userIcon" alt="User Avatar" class="avatar">
    <!-- userIcon = 'assets/avatar/0.png' -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      userIcon: state => state.user.icon 
    })
  }
};
</script>

<style scoped>
.user-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* 使图像呈圆形 */
  object-fit: cover; /* 确保图像覆盖区域且不失真 */
  border: 2px solid #f0f0f0; /* 添加边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影 */
  transition: transform 0.5s ease-in-out; /* 平滑的转换效果 */
}

.avatar:hover {
  transform: rotate(360deg); /* 鼠标悬停时旋转一圈 */
}
</style>

