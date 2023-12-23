<template>
  <div class="articles-container">
    <ArticleColumn v-for="n in computedColumns" :key="n" />
  </div>
</template>

<script>
import ArticleColumn from './ArticleColumn.vue';

export default {
  name: 'Articles',
  components: {
    ArticleColumn
  },
  data() {
    return {
      windowWidth: window.innerWidth // 初始窗口宽度
    };
  },
  computed: {
    computedColumns() {
      // 根据窗口宽度动态计算列数数
      if (this.windowWidth > 1680) {
        return 6;
      } else if (this.windowWidth > 1380) {
        return 5;
      } else if (this.windowWidth > 1080) {
        return 4;
      } else if (this.windowWidth > 768) {
        return 3;
      } else {
        return 2;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.articles-container {
  display: flex;
  justify-content: space-around;
}

/* 移除媒体查询，因为列数是动态计算的 */
</style>
