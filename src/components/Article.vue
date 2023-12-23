<template>
  <div class="article">
    <h1 class="title">{{ article.title }}</h1>
    <div class="meta">
      <div class="author-info">
        <img :src="article.authorIcon" alt="Author" class="author-icon">
        <span class="author-name"><b>作者</b>: {{ article.authorName }}</span>
      </div>
      <div class="additional-info">
        <span class="date"><b>发布时间</b>: {{ article.date }}</span>
        <span class="category"><b>文章分类</b>: {{ article.category }}</span>
      </div>
    </div>
    <div class="content" v-html="renderedContent"></div>
    <div class="tags">标签: {{ article.tags.join(', ') }}</div>
  </div>
</template>

<script>
import { marked } from 'marked';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default {
  name: 'Article',
  data() {
    return {
      // 提供默认测试数据
      article: {
        title: '示例文章标题',
        authorIcon: '/path/to/default/icon.jpg',
        authorName: '示例作者',
        date: '2023-01-01',
        content: '',
        category: '示例分类',
        tags: ['标签1', '标签2']
      }
    };
  },
  created() {
    this.fetchArticle(this.$route.params.articleId);
  },
  computed: {
    renderedContent() {
    // 自定义配置 marked
      marked.setOptions({
        // 启用 GFM
        gfm: true,
        // 启用表格
        tables: true,
        // 启用断行
        breaks: true,
        // 可以添加更多配置
      })
      
      let markdownRendered = marked(this.article.content);
      // 处理块级 LaTeX 表达式
      markdownRendered = markdownRendered.replace(/\$\$([^$]+)\$\$/g, (match, tex) => {
        return katex.renderToString(tex, { throwOnError: false, displayMode: true });
      });
      // 处理行内 LaTeX 表达式
      markdownRendered = markdownRendered.replace(/\$([^$]+)\$/g, (match, tex) => {
        return katex.renderToString(tex, { throwOnError: false, displayMode: false });
      });
      return markdownRendered;
    }
  },
  methods: {
    fetchArticle(articleId) {
      // 在这里模拟 API 调用
      console.log('Fetching article with ID:', articleId);

      // 模拟异步 API 响应
      setTimeout(() => {
        // 假设这是从 API 获取的数据
        const fetchedArticle = {
          title: `永远的奥特曼`,
          authorIcon: '/path/to/fetched/icon.jpg',
          authorName: `齐放`,
          date: '2002-10-13',
          content: '蔚蓝的星球，是我们不变的守候，期待你永远的奥特曼!<br>大地渐渐苏醒，一丝晨光打破了夜的寂静，炙热的心在跳动。祈祷和平降临，我们一起追寻，前途弥漫，荆棘和险峻。心中呐喊，无边天际，放射光明，放射光明。看那蔚蓝色的星球，是我们永远的守候。我伫立在这里，倾听风的声音。<br> 来吧，我的热情在飞翔，带着那灿烂的希望。我们携手并肩，穿越时空界限，冲破黑暗。You Are Always My Hero！（你永远是我的英雄）。大地渐渐苏醒，一丝晨光打破了夜的寂静，炙热的心在跳动。祈祷和平降临，我们一起追寻，前途迷漫，荆棘和险峻。心中呐喊，无边天际，放射光明，放射光明。看那蔚蓝色的星球，是我们永远的守候。我伫立在这里，倾听风的声音。来吧，我的热情在飞翔，带着那灿烂的希望。我们携手并肩，穿越时空界限，冲破黑暗。$You Are Always My Hero$ ！（你永远是我的英雄）。',
          category: '文学',
          tags: ['标签A', '标签B']
        };

        this.article = fetchedArticle; // 更新文章数据
      }, 50); // 假设 1 秒后获取到数据
    }
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
.article {
  font-family: STZHONGS;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.title {
  font-size: 2.4em;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #eee; /* 添加标题下的分割线 */
  padding-bottom: 10px;
  text-align: center; /* 使标题文本居中 */
}


.meta {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.9em;
  color: #666;
  border-bottom: 1px solid #eee; /* 元信息下的分割线 */
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.author-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* 添加一些间隔 */
}
.author-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.author-name, .date, .category {
  margin-right: 15px;
}

.content {
  line-height: 1.6;
  color: #333;
  margin: 20px 20px 20px 20px;
}

.tags {
  font-size: 0.9em;
  color: #007bff;
  border-top: 1px solid #eee; /* 标签上方的分割线 */
  padding-top: 10px;
}
</style>
