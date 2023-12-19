<template>
  <div class="showUserInfo">
    <!-- UserView 页面的其他内容 -->

    <!-- 引入 UserInfo 组件，并传递 userid -->
    <UserInfo :userid="userId" />
  </div>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';

export default {
  name: 'UserView',
  components: {
    UserInfo
  },
  data() {
    return {
      // 假设 userId 是从某处获取的
      userId: 'some-user-id'
    };
  },
  // 如果 userId 是动态的，例如来自路由参数，可以使用 computed 属性或 watch 来获取
};
</script>

<style scoped>
@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.showUserInfo{
  font-family: STZHONGS;
}

</style>
