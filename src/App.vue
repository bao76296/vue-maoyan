<template>
  <div id="app">
    <app-header></app-header>
    <app-home></app-home>
    
  </div>
</template>

<script>

import AppHeader from '@components/layout/AppHeader'
import AppHome from '@pages/home/AppHome';


export default {
    components : {
      AppHome,
      AppHeader
    }
}
</script>






<style lang="scss">

</style>
