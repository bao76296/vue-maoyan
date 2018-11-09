<template>
    <div>
        <div v-if="type != 'movieOnInfoList' &&  (old==''  || old != item.comingTitle)" class="item-comingTitle">
            {{item.comingTitle}}
        </div>
        <div class="app-item-box">
            
            <div class="item-img-box">
                <img width="100%" :src="item.img | getWH" alt="">
            </div>
            <div class="item-info">
                <div class="info__msg">
                    <div class="film-name">
                        {{item.nm}}
                        <div v-if="item.version == 'v3d imax' " class="tips imax"></div>
                        <div v-else-if="item.version == 'v3d'" class="tips d"></div>
                    </div>
                    <div v-if="item.sc ==0" class="wantsee">
                        <span class="orange"> {{item.wish}} </span>&nbsp;人想看
                    </div>
                    <div v-else class="score">
                        观众评<span class="orange">&nbsp; {{item.sc}}</span>
                    </div>
                    <div class="act">
                        {{item.star}}
                    </div>
                    <div class="time">
                        {{item.showInfo}}
                    </div>
                </div>
                <div class="info__btni--box">
                    <div v-if="item.globalReleased" class="presell info__btn">预售</div>
                    <div v-else class="buy info__btn">购票</div>
                </div>
            </div>
        
        </div>
    </div>
    
</template>

<script>


export default {
    name : 'AppItem',
    props : ['item','old', 'type'],
}
</script>


<style lang="scss">
    .item-comingTitle{
        padding: 0.32rem 0.4rem 0;
    }
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
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    .tips{
                        background-size: 100% 100%;
                        margin-left:0.133333rem;
                        &.imax{
                            width:1.146667rem;
                            height:0.373333rem;
                            background-image: url(data:image/png;base64,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);
                        }
                        &.d{
                            width:0.453333rem;
                            height:0.373333rem;
                            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAAAXNSR0IArs4c6QAAA0VJREFUSA3tV1tIFGEU/mZ23F11vaTrZbNs1TIxawkSuyEWIRVU2ksEvRQFRU+91EvQmw9Rb1EQRARFVCC9iCRF201MKlRCMctN3RRb23VRd9e9TecfW2XWmdEedvOh8zJzzn/+c745t39+DkRH73evEcOBqwBXJ4qihckSTRzHjQGinROMF5tP2JycBCIU6BaBnEQ7V7LPAW4uxWgTWCT+FQgGTPJNGHiWDiWkyZVxdXyyakLrwxgGisjKoP9A4vMgxAvieYHnsHe9GdacNESiIhxuH14P/kKY3hlV5JtQSmsxYuLx6Vk4J/1wzQRj4iWfmkCyjAKaDlZidaYR/lAEOo6DXuDRWGXBpZZe+EhWU7wKDcQrUdeoFzffOZYFSBPIme1WCcStdgdefpsAT0CO2YrQuNmCQ5sK8ajrx7z/y619cHh8MOh45JsM2LY2G0dI5/rhKpxv7sHUbHheV+lFtVgpI6iksA9MTKPtiwuhiIjZcBSt/eOSHUuGQWaPRcwXjMDjD6HfNY0Hn5y49uorMgwCjm8tkukqMaoRYbk+9bhr0R6bJUuS9Y5PLVqLF3QOT2KIosTSd7tjKH5ZxqsCkWkRc7pmHTaY01Gam4ann8ekVMXrKPFObwC7rDnQU8qCkaiSiiRTTU38jnyTHuZ0vVQnzCjrpuXQzJ/aMBl0murLjkjTiwHJUG1pLi7Ulklfd+/DiKZxtphHhRuk2nL7Qpq6qhEppGI8t8OK3SXyv4M3NEMmqSCrqSuWIpNeh3JKp9PrX0oVqkC8gRD2lefhZHUxpWPBTgEBZPPFG9Bux9QUHmd3liCduuZJz+iCAZU31dT4Q1G09f/E/ooCXKmvgJ3mCKuRPWVm0N8VWvrm2jhml4H2UPjZwGPRrCrMRHZqCp4PuNAx5ImpqT5VgbAddzqHwdq4fmMetlgyJSMsLTfeDqL9u1tm9AABZsSOATbi2fx5Rh/y0emV6akxXMPd93OHhpoGyfU6DgUZRgRoaP3N+aFhctGSZkRi2kGaqiN0iCWSVIs1kU6VbK8cIHP3CyWMyZMxDBQR0Z48l2qeRDvPblo0r+S9qKafADnzzTDw0nWPblo0ox4mM03Ml+STfDMMvwErHhRiC0ymfAAAAABJRU5ErkJggg==);
                        }
                    }
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
                    &.buy{
                        background: #f03d37;
                    }
                }
            }
            
        }
    }

</style>




