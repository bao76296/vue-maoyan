<template>
    <div class="app-film">
        <div class="film-list-nav">
            <div class="map">
                <span>
                    北京
                </span>
            </div>
            <div class="list-box">
                <div class="list-type"
                    v-for="info in types"
                    :key = "info.id"
                    :class="{active : info.type === type }"
                    @click="type = info.type"
                >
                    <span>
                        {{info.title}}
                    </span>
                </div>
            </div>
            <div class="search">
                <i class="iconfont icon-faxian">

                </i>
            </div>
        </div>


    <keep-alive>
         <app-list :type = "type" ></app-list>
    </keep-alive>
   
    </div>
</template>

<script>

 import AppList from '@components/app-film/AppList';

export default {
    props : ['url'],
    name : 'AppFilm',
    components : {
        AppList
    },
    data () {
        return {
            types : [
                {id : 1, title : "正在热映", type : 'movieOnInfoList'},
                {id : 2, title : '即将上映', type : 'comingList'}
            ],
            type : this.url || 'movieOnInfoList'
        }
    }
}
</script>

<style lang="scss" >
   .app-film{
        position: relative;
        font-size: 0.4rem;
        color:#666;
        height:100%;
       .film-list-nav{
            z-index: 5;
            position: fixed;
            background: white;
            top:1.346667rem;
            width:10rem;
            height:1.2rem;
            border-bottom: 0.026667rem solid #e6e6e6;
            display: flex;
            align-items: center;
            justify-content: space-between;
           .map{
              
               margin-left: 0.4rem;
           }
           .search{
               i{
                   font-size: 0.72rem;
               }
               color:#e54847;
               margin-right:0.4rem;
           }
           .list-box{
               height:100%;
               display: flex;
               align-items: center;
               .list-type{
                   height:1.2rem;
                   line-height: 1.2rem;
                   width:2.133333rem;
                   font-size: 0.4rem;
                   font-weight: 700;
                   margin : 0rem 0.32rem;
                   text-align: center;
                   box-sizing: border-box;
                   &.active{
                       color:#ef4238;
                       border-bottom: 0.053333rem solid #ef4238;
                   }
               }
           }
       }
   }
</style>

