<template>
    <div class="app-list-box">



        <app-item v-for="i in 10" :key ="i"></app-item>
    </div> 
</template>

<script>

import AppItem from './AppItem'
export default {
    name : 'AppList',
    props : ['type'],
    components : {
        AppItem
    },
    created(){
        this.$http({
            url : 'my//ajax/movieOnInfoList?token=v8n3Nz5i1BPVEKExMNpFcDpAv3UAAAAAWQcAAG4A8VqZ4fR3Z3Fqv5U-YwFQTqfseNZc6sH75L8r6-Ji5lpNKVi3-5eYRJmODmquWw'
        }).then(res => {
            console.log(res.data)
        })
    }
}
</script>


<style lang="scss"> 
   .app-list-box{
       box-sizing: border-box;
       padding-top: 1.2rem;
       padding-bottom: 1.253333rem;

   }
</style>


