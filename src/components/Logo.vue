<template>
  <div class="logo-row" @click="goHome">
    <div class = "logo-component">
      <img src="/icon/cloud-rain.svg" alt="Website Logo" class="logo-image">
      <div class="logo-text">织雨丝</div>
    </div>
    <div class = "logo-bio">——·求知 思考·——</div>
  </div>
</template>

<script>

export default {
  methods: {
    goHome() {
      this.$router.push('/');
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
@font-face {
  font-family: 'simkai';
  src: url('assets/fonts/simkai.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
.logo-row {
  cursor: pointer;
  width: 110px;
  background-color: aliceblue;
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 子元素垂直排列 */
  align-items: center; /* 子元素水平居中对齐 */
  justify-content: center; /* 子元素垂直居中对齐 */
  padding: 6px 6px 6px 6px;
  margin: 0px 0px 0px 0px; 
}

.logo-bio{
  font-family: 'STZHONGS', sans-serif; /* Ensure a fallback font is provided */
  font-size: .6em; /* Adjust as needed */
  background-color: black;
  color: rgba(0, 0, 0, 0);
  -webkit-background-clip: text;
  background-clip: text;
  margin: 0 0 0 0; /* Remove default margins */
  padding: 0; /* Adjust padding as needed */
}
.logo-component {
  text-align: center; 
  justify-content: center;
  display: flex; /* Use flexbox for layout */
  flex-direction: row; /* Stack children vertically */
  align-items: center; 
  margin: 0px 0px 5px 0px; 
}

.logo-image {
  width: 1.5em; /* Adjust as needed */
  height: 1.5em; /* Adjust as needed */
  margin-right: 4px;
  filter: brightness(0.5) invert(0.5);
}

.logo-text {
  font-family: 'STZHONGS', sans-serif; /* Ensure a fallback font is provided */
  font-size: 1.4em; /* Adjust as needed */
  background: linear-gradient(to right, grey, blue);
  color: rgba(0, 0, 0, 0);
  -webkit-background-clip: text;
  background-clip: text;
  margin: 0 0 0 0; /* Remove default margins */
  padding: 0; /* Adjust padding as needed */
}
</style>
