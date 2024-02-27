<script setup>
import Webs from '@/components/Webs.vue'
import { portfolioData } from '@/assets/data.js'
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
