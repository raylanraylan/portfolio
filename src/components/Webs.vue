<script setup>
import { computed, ref } from 'vue';
const portfolio = defineProps(['data'])
const currentTabIndex = ref(1);
const switchTab = (event)=>{
  console.log(event.currentTarget.id);
  currentTabIndex.value = event.currentTarget.id;
}

const currentTab = computed(()=>portfolio.data[currentTabIndex.value])

</script>

<template>
  <div class="webs">
    <div class="webs__container">
      <div class="webs__img">{{ currentTab.layoutImage }}</div>
      <div class="webs__nav">
        <div class="webs__text">
          <p class="webs__description">{{ currentTab.description }}</p>
          <p class="webs__technology" v-for="content in currentTab.technology">{{ content }}</p>
          <div class="webs__layout">
            <a :href="currentTab.ui" class="webs__ui">UI設計稿</a>
            <a :href="currentTab.demo" class="webs__demo">Demo</a>
          </div>
        </div>
        <div class="webs__tabs">
          <button type="button" class="webs__tab" v-for="data in portfolio.data" href="#" :key="data.id" @click="switchTab" :id="data.id">
            {{ data.name }} /
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webs {
  display: flex;
  align-items: center;
  padding: 50px;
  height: 100vh;
  backdrop-filter: blur(20px);
  background-color: rgba($primary100,.4);

  &__container{
    display: flex;
    align-items: end;
    width: 100%;
  }

  &__img {
    width: 720px;
    height: 480px;
    background-color: grey;
  }
  
  &__nav{
    margin-left: $large;
  }

  &__text{
    display: flex;
    flex-direction: column;
    gap:12px;;
  }

  &__description {
    font-size: $large;
    line-height: 1.3;
  }
  
  &__layout{
    display: flex;
    justify-content: end;
    gap:$large;
    a {
      display: inline-block;
      text-decoration: none;
      width: fit-content;
      padding: 10px;

      position: relative;
      font-size: 48px;
      color:$primary200;

      transition: 1s;
      &::after{
          content: '';
          display: block;
          opacity: 0;
          width: 0px;
          height: 0px;
          border-radius: 25% 50%;
          background-color: $primary400;
          position: absolute;
         
          bottom: 0;
          z-index: -2;
          transition: 1s;
        }
      &:hover{
        transform: translate(0,10px);
        color: $primary400;

        &::after{
          content: '';
          display: block;
          opacity: 30%;

          width: 80%;
          height: 25px;
          border-radius: 50%;
          background-color: $primary400;
        }
      }
    }
  }

  &__tabs{
    display: flex;
  }

  &__tab{
    background: none;
    border: none;
    padding: 0;
  }
}

</style>
