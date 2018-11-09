<template>
    <div id="footer">
        <div class="footer-box">
            <router-link tag="div" active-class="active"  class="footer__item" 
                v-for="item in btnList" :key="item.id"
                :to = "item.path"
               
            >
                <i  :class="item.icon"  class="iconfont "></i><span>{{item.name}}</span>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name : 'AppFooter',
    data(){
        return {
            btnList : [
                {
                    id : 1, name : '电影', path : '/film/movieOnInfoList', icon : 'icon-dianying', titleName : '猫眼电影'
                },
                {
                    id : 2, name : '影院', path : '/cinema', icon : 'icon-dianyingyuan', titleName : '影院'
                },
                {
                    id : 3, name : '我的', path : '/mine', icon : 'icon-home-copy-copy', titleName : '我的'
                }
            ],
            path : '/film',

        }
    },
    // methods : {
         
    // },
    // created(){
    //     this.$bus.$emit('change1', this.btnList[0].titleName)
    // }
   
}
</script>

<style lang="scss">
    #footer{
        .footer-box{
            background: white;
            color:#696969;
            font-size: 0.32rem;
            width:10rem;
            height:1.28rem;
            border-top : 0.013333rem solid #d8d8d8;
            position: fixed;
            bottom:0;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            z-index: 3;
            .footer__item{
                flex-grow: 1;
                align-items: stretch;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                i{
                    font-size: 0.666667rem;
                }
            }
        }
        .active {
            color : #f03d37;
        }
       
        
    }
</style>
