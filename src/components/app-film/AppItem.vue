<template>
    <div class="app-item-box">
        <div class="item-img-box">
            <img width="100%" src="https://p0.meituan.net/128.180/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg" alt="">
        </div>
         <div class="item-info">
            <div class="info__msg">
                <div class="film-name">
                    毒液：致命守护者
                    <div class="tips">

                    </div>
                </div>
                <div class="wantsee">
                    <span class="orange">23333</span>&nbsp;人想看
                </div>
                <!-- <div class="score">
                    观众评<span class="orange"></span>
                </div> -->
                <div class="act">
                    主演: 汤姆·哈迪,米歇尔·威廉姆斯,里兹·阿迈德
                </div>
                <div class="time">
                    2018-11-09 本周五上映
                </div>
            </div>
            <div class="info__btni--box">
                <div class="presell info__btn">预售</div>
            </div>
        </div>
       
    </div>
</template>

<script>


export default {
    name : 'AppItem',
    components : {
        
    }
}
</script>


<style lang="scss">
    .app-item-box{
        display: flex;
        // padding:  0.32rem  0.373333rem 0.32rem    0.4rem;
        .item-img-box{
            padding:  0.32rem  0  0.32rem    0.4rem;
            width:1.706667rem;
           
            height:2.4rem;
            margin-right:0.266667rem;
            img {
                height:2.4rem;
                width:100%;
                display: block;
            }
        }
        .item-info{
            padding: 0.32rem  0 0.32rem   0;
            margin-right: 0.32rem;
            font-size:13px;
            width:7.173333rem;
            display: flex;
            height:2.4rem;
            border-bottom: 1px solid  #e6e6e6;
            .info__msg{
                width:5.386667rem;
                margin-right:0.133333rem;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                height:100%;
                .film-name{
                    display: flex;
                    align-items: center;
                    color:#333;
                    font-size: 0.453333rem;
                    font-weight: 700;
                    margin-bottom: 0.106667rem;
                    .tips{
                        width:1.146667rem;
                        height:0.373333rem;
                        background-image: url(data:image/png;base64,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);
                        background-size: 100% 100%;
                        margin-left:0.133333rem;
                    }
                }
                .wantsee{
                   
                }
                .orange{
                    font-size: 15px;
                    color:#faaf00;
                    font-weight: 700;
                }
                .act{
                    margin-top:0.133333rem;
                    overflow:hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .time{
                    margin-top:0.16rem;
                }
            }
            .info__btni--box{
                display: flex;
                align-items: center;
                justify-items: center;
                .info__btn{
                    height:0.72rem;
                    width:1.253333rem;
                    border-radius: 0.106667rem;
                    color:white;
                    text-align: center;
                    line-height: 0.72rem;
                    font-size: 0.32rem;
                    &.presell{
                        background: #3c9fe6;
                    }
                }
            }
            
        }
    }

</style>




