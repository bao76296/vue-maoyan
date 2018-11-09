<template>
    <div  class="app-list-box">
        <div ref="root" class="root__scroll">
           <div class="scroll__box">
                <keep-alive>
                    <app-film-swiper v-if="swiperList.length" :swiperList = "swiperList"></app-film-swiper>
                </keep-alive>
               
                <div v-if="swiperList.length" class="line">
                </div>
              
                <app-item 
                    v-for="(item , index) in coming" 
                    :key ="item.id" 
                    :item="item"
                    :old = "index>0 ?  coming[index-1].comingTitle : '' "
                    :type = type
                >
                </app-item>
           </div>
        </div>
       
        
        
    </div> 
</template>

<script>

import AppItem from './AppItem';
import AppFilmSwiper from './AppFilmSwiper'
export default {
    name : 'AppList',
    props : ['type'],
    data (){
        return {
            movieList : [],
            swiperList : [],
            coming : [],
            listId : [],
            params : {
                token : 'v8n3Nz5i1BPVEKExMNpFcDpAv3UAAAAAWQcAAG4A8VqZ4fR3Z3Fqv5U-YwFQTqfseNZc6sH75L8r6-Ji5lpNKVi3-5eYRJmODmquWw',
            },
            url : '',
            start : 0
        }
    },
    components : {
        AppItem,
        AppFilmSwiper
    },
    watch : {
        type : {
            handler () {
                this.movieList = [];
                this.coming = [];
                this.swiperList = [];
                this.getList();
                this.start = 12;
            },
            immediate : true
        }
        
    },
    methods : {
        async getList ()  {
            
            this.url = '/my/ajax/' + this.type + '?' + (this.type != 'movieOnInfoList' ? 'ci=66&limit=10' : '')
            if(this.type != 'movieOnInfoList'){
                await this.getSwiper();
            } 
            await this.initMovieList();
        },
        async initMovieList() {
            await this.$http({
               url : this.url,
               params : this.params
            }).then(res => {
                this.coming = this.coming.concat(res.data.movieList || res.data.coming);
                this.listId = res.data.movieIds;
            })
        },
        async getSwiper(){
            await this.$http({
                url : '/my/ajax/mostExpected?ci=1&limit=10&offset=0&token=v8n3Nz5i1BPVEKExMNpFcDpAv3UAAAAAWQcAAG4A8VqZ4fR3Z3Fqv5U-YwFQTqfseNZc6sH75L8r6-Ji5lpNKVi3-5eYRJmODmquWw'
            }).then(res => {
                this.swiperList = res.data.coming;
            })
        },
        async getMovieList(){
            if(this.start >= this.listId.length){
                return ;
            }
            this.params.movieIds = this.listId.slice(this.start, this.start+5).join(',');
            await this.$http({
                url : '/my/ajax/moreComingList?' + (this.type != 'movieOnInfoList' ? 'ci=66&limit=10' : ''),
                params : this.params,
               
           }).then(res => {
                this.start+=5;
                this.coming = this.coming.concat(res.data.coming)
            })
        }
        
    }, 
    mounted (){
        this.$scroll({
            el : this.$refs.root,
            handler : this.getMovieList.bind(this)
        })
    }
}
</script>


<style lang="scss"> 
    .line{
        background: #e6e6e6;
        width:9.333333rem;
        height:0.266667rem;
    }
   .app-list-box{
       box-sizing: border-box;
       padding-top: 1.2rem;
       padding-bottom: 1.253333rem;
   }
   .root__scroll{
       height:15.213333rem;
       padding-bottom: 0;
   }
   .scroll__box{
       padding-bottom: 1.253333rem;
   }
</style>


