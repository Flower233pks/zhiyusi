<template>
  <div class="about">
    <section class="about-site">
      <h1>关于本网站</h1>
      <p>织雨丝，知与思。</p>
      <p>子曰：“学而不思则罔，思而不学则殆。”</p>
    </section>

    <section class="about-developers">
      <h2>开发者介绍</h2>
      <div class="developer">
        <img src="/author/pks.jpg" class="icon" alt="pks" />
        <div class="developer-info">
          <h3>Vivian Peng 彭鲲硕</h3>
          <p>概念设计、前端开发</p>
        </div>
      </div>
      <div class="developer">
        <img src="/author/llz.jpg" class="icon" alt="llz" />
        <div class="developer-info">
          <h3>李岭治</h3>
          <p>服务器搭建、后端开发</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  // 其他组件选项
}
</script>

<style scoped>
@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.about {
  font-family: STZHONGS, sans-serif; /* 添加备用字体 */
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center; /* 统一文本居中 */
  color: #333; /* 字体颜色 */
}

.about-site h1,
.about-developers h2 {
  font-size: 1.8em; /* 增大标题字号 */
  margin-bottom: 20px; /* 添加标题下边距 */
}

.about-site p {
  margin-bottom: 15px;
  font-size: 1.2em; /* 调整段落字号 */
}
.about-developers .developer {
  display: flex;
  align-items: flex-start; /* 头像与文本顶部对齐 */
  margin-top: 20px;
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.about-developers .icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.about-developers .developer-info {
  display: flex;
  flex-direction: column;
}

.about-developers .developer-info h3 {
  margin-bottom: 10px;
}

.about-developers .developer-info p {
  text-align: left; /* 左对齐文本 */
}
</style>

