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
      <div class="webs__tabs">
          <button type="button" class="webs__tab" :class="{ webs__click:currentTabIndex===data.id }" v-for="data in portfolio.data" href="#" :key="data.id" @click="switchTab" :id="data.id">
            {{ data.name }}
          </button>
        </div>
      <div class="webs__img">
        <img :src="currentTab.layoutImage" alt="作品預覽"/>
      </div>
      <div class="webs__summary">
        <div class="webs__text">
          <p class="webs__description">{{ currentTab.description }}</p>
          <p class="webs__technology">{{ currentTab.technology }}</p>
          <div class="webs__layout">
            <a :href="currentTab.ui" class="webs__ui">UI設計稿</a>
            <a :href="currentTab.demo" class="webs__demo">Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.webs {
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  backdrop-filter: blur(20px);
  background-color: rgba($primary100,.4);

  &__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    @include breakpoint($tablet){
      width: 50%;
    }
    @include breakpoint($desktop){
      width: 40%;
    }
  }

  &__tabs{
    display: flex;
    flex-wrap: wrap;
    align-self: end;
    margin-bottom: 12px;
    gap: 12px;

    @include breakpoint($tablet){
      top:5%
    }

    @include breakpoint($desktop){
      top: 1%
    }
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

  &__img {
    width: 100%;
    border: 2px solid $primary400;
    img{
      display: block;
      width: 100%;
    }
  }
  
  &__summary{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // @include breakpoint($desktop){
    //   padding: 200px;
    //   margin-left: -20px;
    // }
  }

  &__text{
    display: flex;
    flex-direction: column;
    gap:12px;
    color:$primary500;
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
      font-size: 24px;

      position: relative;
      color:$primary200;

      transition: 1s ease-in-out;
      @include breakpoint($desktop){
        font-size: 48px;
        margin-left: -20px;
      }

      &:hover{
        transform: translate(0,10px);
        color: $primary400;

      }
    }
  }
}
</style>
