<template>
    <div class="con-swiper">
        <swiper class="con__img__swiper" :options="swiperOption" ref="mySwiper" >
        
            <swiper-slide class=""> <img  width="100%"  src="https://i0.hdslb.com/bfs/archive/74125d74080d05ec73ca980fdf24e2ff5c783e90.jpg@480w_300h.webp" alt=""> </swiper-slide>
            <swiper-slide class=""> <img   width="100%" src="https://i0.hdslb.com/bfs/archive/74125d74080d05ec73ca980fdf24e2ff5c783e90.jpg@480w_300h.webp" alt=""> </swiper-slide>
                
        </swiper>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        swiperOption: {
          autoplay : true,
          loop:true
        },
        swiperDate : []
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    beforeCreate(){
       
    },
    mounted() {
        this.$http({
            url : '/my/ajax/movieOnInfoList',
            method : 'get',
            
        }).then(res => {
            console.log(res)
        })
    }

}
</script>


<style lang="scss">
    .con-swiper{
        width:9.36rem;
        height:2.9333rem;
        padding : 0 0.32rem;
        .con__img__swiper{
            img{
                height:2.9333rem;
                border-radius: 0.2rem;
            }
        }
    }
</style>


