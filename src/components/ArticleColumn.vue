<template>
  <div class="article-column">
    <ArticleBlock
      v-for="article in articles"
      :key="article.id"
      :articleId="article.id"
      :title="article.title"
      :abstract="article.abstract"
      :authorIcon="article.authorIcon"
      :authorName="article.authorName"
      :category="article.category"
      :tags="article.tags"
    />
    <div v-if="loading">加载中...</div>
  </div>
</template>

<script>
import ArticleBlock from './ArticleBlock.vue';

export default {
  name: 'ArticleColumn',
  components: {
    ArticleBlock
  },
  data() {
    return {
      articles: [], // 文章数据数组
      loading: false, // 是否正在加载数据
    };
  },
  mounted() {
    this.fetchArticles();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    addRandomMarginToArticleBlocks() {
      const articleBlocks = this.$el.querySelectorAll('.article-abstract');
      articleBlocks.forEach(block => {
        const randomMargin = Math.floor(Math.random() * 40) + 10 ; // 0 到 15 的随机数
        block.style.margin = `0 4px calc(70px + ${randomMargin}px) 4px`;
      });
    },
    fetchArticles() {
      this.loading = true;
      setTimeout(() => {
        const newArticles = [];
        for (let i = 0; i < 5; i++) { // 每次加载5篇文章
          newArticles.push({
            id: `article_${this.articles.length + i}`, // 假设的文章ID
            title: `文章标题 ${this.articles.length + i}`,
            abstract: `这是文章 ${this.articles.length + i} 的简介。`,
            authorIcon: '/path/to/default/authorIcon.jpg', // 默认的作者头像路径
            authorName: `作者 ${this.articles.length + i}`,
            category: '分类',
            tags: ['标签1', '标签2'] // 假设的标签
          });
        }
        this.articles = [...this.articles, ...newArticles];
        this.loading = false;
        this.$nextTick(() => {
          this.addRandomMarginToArticleBlocks();
        })
      }, 40); // 假设1秒后获取到数据
    },
    handleScroll() {
      // 当滚动接近页面底部时，加载更多文章
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && !this.loading) {
        this.fetchArticles();
      }
    }
  }
}
</script>

<style scoped>
.article-column {
  display: flex;
  flex-direction: column;
  align-items: center; /* 确保子元素居中对齐 */
  gap: 20px; /* 在文章块之间添加间距 */
  padding: 10px; /* 组件的内边距 */
  margin : 0 0 0 0;
}

/* 如果文章块的样式在 ArticleBlock.vue 中定义，这里无需重复 */
</style>
