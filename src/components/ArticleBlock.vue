<template>
  <router-link :to="`/article/${articleId}`" class="article-block">
    <h3 class="article-title">{{ title }}</h3>
      <p class="article-abstract">{{ abstract }}</p>
      <div class="author-info">
        <img :src="authorIcon" alt="Author" class="author-icon">
        <span class="author-name">{{ authorName }}</span>
      </div>
    <div class="article-meta">
      <span class="article-category">{{ category }}</span>
      <span class="article-tags">{{ tags.join(', ') }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ArticleBlock',
  props: {
    articleId: String,
    title: String,
    abstract: String,
    authorIcon: String,
    authorName: String,
    category: String,
    tags: Array
  },
  // 其他组件选项
}
</script>
<style scoped>
@font-face {
  font-family: 'STZHONGS';
  src: url('assets/fonts/STZHONGS.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.article-block {
  display: block;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  background-image: linear-gradient(to right top, #e6f9ff, #ffffff); /* 渐变背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  font-family: STZHONGS;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-block:hover {
  transform: translateY(-5px); /* 悬停时轻微上移 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.article-title {
  font-size: 1.2em; /* 增大标题字号 */
  color: #0056b3; /* 标题颜色 */
  margin: 0px 4px 12px 4px ;
}

.article-abstract {
  font-size: .7em; /* 增大简介字号 */
}

.author-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content:first baseline;
  margin-bottom: 10px;
}

.author-icon {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #e6f9ff;
  margin-right: 10px; /* 只保留右边距 */
}

.author-name {
  font-weight: bold;
  color: #007bff;
  line-height: 20px; /* 行高与头像高度一致 */
}

.article-meta {
  font-size: 0.65em;
  color: #666; /* 元信息颜色 */
}
</style>
