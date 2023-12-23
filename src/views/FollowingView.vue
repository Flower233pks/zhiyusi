<template>
  <div class="following">
    <h1 class="title">我关注的人</h1>
    <div class="following-users">
      <div class="fuser" v-for="follower in followers" :key="follower.id">
        <img :src="follower.icon" alt="头像" class="icon">
        <div class="fuser-info">
          <span class="fuser-name">{{ follower.name }}</span>
          <span class="fuser-fans">粉丝数: {{ follower.fans }}</span>
          <span class="fuser-bio">{{ follower.bio }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FollowingView',
  data() {
    return {
      // 示例数据，实际应从外部获取
      followers: [
        { id: 1, name: '小小花', fans: 1215, bio: '爱好音乐和旅行', icon: '/avatar/1.png' },
        { id: 2, name: '小花', fans: 959, bio: '前端开发者', icon: '/avatar/2.png' },
        { id: 3, name: '中花', fans: 11305, bio: '只有我的昵称听起来是来自 KFC 的？', icon: '/avatar/3.png' },
        { id: 4, name: '大花', fans: 687, bio: '行之不得，反求诸己', icon: '/avatar/4.png' },
        { id: 5, name: '特大花', fans: 1810300, bio: '我爱玩原神', icon: '/avatar/5.png' },
        { id: 6, name: '超级花', fans: 114514, bio: '空间快爆炸，好想玩原神', icon: '/avatar/6.png' },
        // ... 其他关注者 ...
      ]
    };
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.following {
  font-family: STZHONGS, sans-serif; /* 添加备用字体 */
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center; /* 统一文本居中 */
  color: #333; /* 字体颜色 */
}

.following-site h1,
.following-users h2 {
  font-size: 1.8em; /* 增大标题字号 */
  margin-bottom: 20px; /* 添加标题下边距 */
}

.following-site p {
  margin-bottom: 15px;
  font-size: 1.2em; /* 调整段落字号 */
}
.following-users .fuser {
  display: flex;
  align-items: flex-start; /* 头像与文本顶部对齐 */
  margin-top: 20px;
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.following-users .icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.following-users .fuser-info {
  display: flex;
  flex-direction: column;
  justify-content: last baseline;
}

.fuser {
  display: flex;
  align-items: flex-start; /* 使头像和信息在顶部对齐 */
  margin-bottom: 20px;
  /* ... */
}
.icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  /* ... */
}
.fuser-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 平均分布各个元素 */
}
.fuser-info span {
  margin-bottom: 5px; /* 为每个信息项添加一些间距 */
  text-align: left; /* 左对齐文本 */
}
.fuser-name {
  font-size: 1.5em; /* 名字稍大一些 */
  color: #333; /* 深色字体 */
  font-weight: bold; /* 加粗 */
}

.fuser-fans {
  font-size: 1em;
  margin-top: 4px;
  color: rgba(102, 102, 102, 0.438); /* 稍浅的字体颜色 */
  background-color: #f0f0f0; /* 背景色 */
  border-radius: 4px; /* 圆角 */
  display: inline-block; /* 使背景色仅围绕文字 */
}

.fuser-bio {
  font-size: 1em;
  color: #555; /* 签名使用不同的颜色 */
  font-style: italic; /* 斜体样式 */
  margin-top: 4px; /* 在签名和其他信息之间添加一些间距 */
}

</style>