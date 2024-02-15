<script setup>
import Webs from '@/components/Webs.vue'
const portfolioData = {
  1:{
    id:1,
    layoutImage:'',
    name:'切版作品',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technology:{
      text1:'Original Latin text',
      text2:'Original Latin text',
      text3:'Original Latin text',
    },
    ui:'xxxxx.xxx.x.x',
    demo:'xxxxx.xxx.x.x',
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
