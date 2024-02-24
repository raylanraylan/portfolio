<script setup>
import { computed, ref,watch } from 'vue';
const portfolio = defineProps(['data'])
const currentTabIndex = ref(1);

const switchTab = (event)=>{
  currentTabIndex.value = Number(event.currentTarget.id);
}

const currentTab = computed(()=>portfolio.data[currentTabIndex.value]);
</script>

<template>
  <div class="webs">
    <div class="webs__container">
        <div class="webs__img">
          <img :src="currentTab.layoutImage" />
        </div>
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
          <button type="button" class="webs__tab" :class="{ webs__click:currentTabIndex===data.id }" v-for="data in portfolio.data" href="#" :key="data.id" @click="switchTab" :id="data.id">
            {{ data.name }}
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
  padding: 200px;
  height: 100vh;
  backdrop-filter: blur(20px);
  background-color: rgba($primary100,.4);

  &__container{
    display: flex;
    width: 100%;
  }

  &__img {
    width: 720px;
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-bottom: 15px solid $primary400;
    border-left: 15px solid $primary400;
    box-shadow: -4px 4px 5px 5px $primary500;



    img{
      border: 20px solid $primary400;
      border-top: 18px solid $primary300;
      border-right: 18px solid $primary300;
      border-bottom: 5px solid $primary100;
      border-left: 5px solid $primary100;
      box-shadow: -5px 5px 0px 0px $primary500;
      display: block;
      width: 100%;
    }
  }
  
  &__nav{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: -50px;
  }

  &__text{
    display: flex;
    flex-direction: column;
    gap:12px;;
  }

  &__description {
    font-size: $medium;
    line-height: 1.3;
  }

  &__technology {
    font-size: $small;
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

      transition: 1s ease-in-out;

      &:hover{
        transform: translate(0,10px);
        color: $primary400;

      }
    }
  }

  &__tabs{
    display: flex;
    justify-content: end;
    gap: 12px;
  }

  &__tab{
    background: none;
    border: none;
    border-left: 1px solid white;
    padding:0 12px;
    font-size: $medium;
    color:white;
    cursor: pointer;
    transition: .5s ease-in-out;
    opacity: 50%;

    &:hover{
      opacity: 100%;
    }
  }

  &__click {
    border-left: 24px solid white;
    opacity: 100%;
  }
}
</style>
