<template>

    <div class="app__film--swiper">
        <div class="film__swiper--title">
            近期最受期待
        </div>
        <div class="swiper__box">
            <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide 
                    v-for="item in swiperList" 
                    :key ="item.id"
                
                >
                    <div class="swiper__item">
                        <img width=100% :src="item.img | getWH" alt="">
                        <div class="swiper__item--watch">
                            {{item.wish}}人想看
                        </div>
                        <div class="swiper__item--name">
                            {{item.nm}}
                        </div>
                        <div class="swiper__item--time">
                            {{item.comingTitle | setTime}}
                        </div>
                    </div>
                </swiper-slide>
               
            </swiper>
        </div>
        
    </div>
</template>


<script>
export default {
    name : 'AppFilmSwiper',
    props : ['swiperList'],
    data() {
      return {
        swiperOption: {
            slidesPerView : 'auto'
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }

}
</script>


<style lang="scss">
    .film__swiper--title{
        margin-top:0.32rem;
        margin-bottom: 0.32rem;
        margin-left : 0.4rem;
        font-size: 0.373333rem;
        color:#333;
    }
    .swiper__box{
        width:343px;
        overflow: hidden;
        padding-left: 0.4rem;
        .swiper-slide {
            margin-right: 0.346667rem;
            width:2.266667rem;
        }
         .swiper__item{
            
            
            position: relative;
            img{
                height:3.066667rem;
                width:2.266667rem;
            }
        }
        .swiper__item--watch{
            position: absolute;
            top:2.56rem;
            left : 0.053333rem;
            font-size: 0.32rem;
            color:#faaf00;
            font-weight: 700;
        }
        .swiper__item--name{
            width:2.266667rem;
            color:#222;
            font-weight: 700;
            font-size: 13px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            margin-bottom:0.08rem;
        }
        .swiper__item--time{
            font-size: 0.32rem;
            color : #999;
        }
    }
   
</style>


