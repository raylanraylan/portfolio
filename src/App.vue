<script setup>
import Webs from '@/components/Webs.vue'
const portfolioData = {
  1:{
    id:1,
    layoutImage:'src/assets/preview screen1.png',
    name:'切版作品',
    // description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technology:{
      text1:'使用Sass/SCSS作為CSS的預處理，並使用Variables、Nesting、Mixins、Extends等幾種特性整合共用樣式，並為不同裝置調整外觀。',
      text2:'使用Bootstrap5的元件。',
      text3:'使用Swiper做到跑馬燈效果',
    },
    ui:'https://github.com/raylanraylan/layout/blob/main/template_6.png',
    demo:'https://raylanraylan.github.io/T6__layout/',
  },
  2:{
    id:2,
    layoutImage:'',
    name:'todolist',
    description:'',
    technology:'',
    ui:'',
    demo:'',
  }
}
</script>

<template>
   <main>
    <Webs :data="portfolioData"></Webs>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  background: no-repeat url('@/assets/bg.jpg') 0/cover;
}
</style>
