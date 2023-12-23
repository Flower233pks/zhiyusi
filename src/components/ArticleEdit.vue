<template>
  <div class="article-edit-container">
    <h2>{{ isEditing ? '编辑' : '新建' }}文章</h2>
    <form @submit.prevent="handleSubmit">
      <div class = "Fuck">
      <section class="input-group">
        <label for="title" class="label">标题</label>
        <input type="text" id="title" class="input" v-model="article.title" required placeholder="来一个劲爆一点的标题！">
      </section>
      <section class="input-group">
        <label for="content" class="label">内容</label>
        <textarea id="content" class="textarea" v-model="article.content" rows="20" required placeholder="今天想写点什么？"></textarea>
      </section>
<div v-if="article.category" class="selected-category">
  当前分类： <strong>{{ article.category }}</strong>
</div>
<div class="selected-tags">
  <div class="fuck-tag">
  <div> 标签 ：</div>
  <span v-for="(tag, index) in article.tags" :key="`selected-tag-${index}`" class="selected-tag">
    {{ tag }} <button @click="removeTag(tag)" class="remove-tag-button">X</button>
  </span>
  </div>
</div>
<div class="picker-container">
  <div class="picker-button-group">
    <button @click="toggleCategoryPicker" class="picker-button">选择分类</button>
    <button @click="toggleTagPicker" class="picker-button">选择标签</button>
  </div>

  <div v-if="showCategoryPicker" class="category-picker">
    <div v-for="(category, index) in categories" :key="`category-${index}`" @click="selectCategory(category)" class="picker-item">
      {{ category }}
    </div>
  </div>

  <div v-if="showTagPicker" class="tag-picker">
    <div v-for="(tag, index) in tags" :key="`tag-${index}`" @click="selectTag(tag)" class="picker-item">
      {{ tag }}
    </div>
  </div>
</div>


      </div>
      <button type="submit" class="btn" @click="submitArticle">{{ isEditing ? '更新' : '发布' }}文章</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    existingArticle: Object // 用于编辑的现有文章
  },
  created() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeDestroy() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },
  data() {
    return {
      article: this.existingArticle || {
        title: '',
        content: '',
        category: '(空)',
        tags: []
      },
      isEditing: !!this.existingArticle,
      categories: ['(空)', '科技', '教育', '娱乐', '生活'], // 示例分类
      tags: ['Vue', 'JavaScript', 'Web开发', '编程'], // 示例标签
      showCategoryPicker: false,
      showTagPicker: false,
      isSaved: true
    };
  },
  watch: {
    'article.title': function(newVal, oldVal) {
      if (newVal !== oldVal) this.isSaved = false;
    },
    'article.content': function(newVal, oldVal) {
      if (newVal !== oldVal) this.isSaved = false;
    }
  },
  methods: {
    submitArticle() {
    // ... 提交文章的逻辑 ...
      this.isSaved = true;
    },
    handleBeforeUnload(event) {
      if (!this.isSaved) {
        const message = '您有未保存的更改。您确定要离开吗？';
        event.returnValue = message;
        return message;
      }
    },
    handleSubmit() {
      if (this.isEditing) {
        // 更新文章的逻辑
        console.log('更新文章:', this.article);
      } else {
        // 创建新文章的逻辑
        console.log('创建新文章:', this.article);
      }
      // 可以在这里调用 API 或 Vuex actions
    },
    selectCategory(category) {
      this.article.category = category ;
      //this.article.category = category == '(空)' ? '' : category ;
      this.showCategoryPicker = false;
    },
    selectTag(tag) {
      if (!this.article.tags.includes(tag)) {
        this.article.tags.push(tag);
      }
    },
    removeTag(tag) {
      this.article.tags = this.article.tags.filter(t => t !== tag);
    },
    toggleCategoryPicker() {
      this.showCategoryPicker = !this.showCategoryPicker;
      this.showTagPicker = false;
    },
    toggleTagPicker() {
      this.showTagPicker = !this.showTagPicker;
      this.showCategoryPicker = false;
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

.article-edit-container {
  font-family: STZHONGS;
  position: relative;
  max-width: 1000px; /* 更宽的最大宽度以适应更多内容 */
  margin: 40px auto; /* 更大的上下边距 */
  padding: 30px; /* 更多的内边距 */
  background-color: #fff; /* 白色背景 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 轻微的阴影以提升层次感 */
  border-radius: 8px; /* 圆角 */
}
.input-group {
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 8px;
  font-size: 1.2em;
  color: #333;
}
.Fuck{
  margin-bottom: 50px ;
}
.input, .textarea {
  width: 95%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input:focus, .textarea:focus {
  border-color: #007bff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 123, 255, 0.25);
  outline: none;
}

.textarea {
  min-height: 250px;
}


.btn {
  font-family: STZHONGS;
  background-color: #007bff;
  color: white;
  padding: 12px 20px; /* 更大的内边距 */
  border: none;
  border-radius: 6px; /* 更圆的边角 */
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s; /* 平滑背景色过渡 */

  position: absolute; /* 固定定位 */
  bottom: 10px; /* 距离底部20px */
  right: 20px; /* 距离右侧20px */
  z-index: 1000; /* 确保在最上层 */
}

.btn:hover {
  background-color: #0056b3;
}

.button-group {
  display: flex;
  justify-content:baseline ;
  margin: 0px 20px 20px 0px ;
}

.picker-button {
  font-family: STZHONGS;
  padding: 10px 20px;
  background-color:brown;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px ;
  transition: background-color 0.3s;
}

.picker-button:hover {
  background-color:crimson;
}

.category-picker{
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  margin-top: 10px;
}
.tag-picker {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  margin-left: 120px;
}

.picker-item {
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.picker-item:hover {
  background-color: #f0f0f0;
}

.selected-category {
  margin-top: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.selected-tags {
  margin: 20px 20px 10px 0px ;
}

.selected-tag {
  margin-right: 5px;
  background-color: #eef;
  padding: 3px 8px;
  border-radius: 3px;
}
.fuck-tag{
  display: flex;
  flex-direction: row;
  align-items: center; /* 确保子元素居中对齐 */
}

.remove-tag-button {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}

/* 可以考虑添加媒体查询以适应不同屏幕尺寸 */
@media (max-width: 768px) {
  .article-edit-container {
    margin: 20px;
    padding: 15px;
  }
}

</style>
