<template>
  <div id="app">
    <app-header-footer></app-header-footer>

    <main>
      <app-film></app-film>
    </main>
  </div>
</template>

<script>

import AppHeaderFooter from './components/common/app-header-footer/AppHeaderFooter'
import AppFilm from '@pages/film/AppFilm';


export default {
    components : {
      AppHeaderFooter,
      AppFilm
    }
}
</script>






<style lang="scss">
  main{
    padding-top:1.346667rem;
    padding-bottom: 1.293333rem;
    height:100%;
    box-sizing: border-box;
  }
  html, body, #app{
    height:100%;
  }
</style>
