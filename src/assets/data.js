function getImageUrl(name,ext) {
  return new URL(`/src/assets/img/${name}.${ext}`, import.meta.url).href
}

export const portfolioData = {
    1:{
      id:1,
      layoutImage:getImageUrl('t6','png'),
      name:'切版（T6）',
      description:'使用Sass',
      technology:'使用Sass/SCSS作為CSS的預處理，並使用Variables、Nesting、Mixins、Extends等幾種特性整合共用樣式，並為不同裝置調整外觀/使用Bootstrap5的元件/使用Swiper做到跑馬燈效果',
      ui:'https://github.com/raylanraylan/layout/blob/main/template_6.png',
      demo:'https://raylanraylan.github.io/T6__layout/',
    },
    2:{
      id:2,  
      layoutImage:getImageUrl('todo_js','jpeg'),
      name:'TodoList（原生）',
      description:'使用原生Javascript完成基本功能',
      technology:'',
      ui:'https://hexschool.github.io/THE_F2E_Design/todolist/',
      demo:'https://raylanraylan.github.io/todolist_VanillaJS/',
    
    },
    3:{
      id:3,
      layoutImage:getImageUrl('todo_vue','jpeg'),
      name:'TodoList（Vue）',
      description:'使用從原生版本換成Vue完成基本功能',
      technology:'',
      ui:'https://hexschool.github.io/THE_F2E_Design/todolist/',
      demo:'https://raylanraylan.github.io/todolist_Vue3/',
    },
    4:{
      id:4,
      layoutImage:getImageUrl('f2e_mission1','jpeg'),
      name:'模擬競選網站（Vue）',
      description:'The F2E 5th 前端 & UI 修煉精神時光屋，使用UNA設計師所設計的版面。',
      technology:'前端框架版本：Vue3/Vite建立檔案與打包/Bootstrap：使用元件/aos：在一頁式中的區塊中，套用過渡效果/counterup2：套用數字計算動畫/splidejs：使用輪播套件',
      ui:'https://2023.thef2e.com/users/12061579704041516830',
      demo:'https://raylanraylan.github.io/2023_F2E_Week1/',
    },
  }