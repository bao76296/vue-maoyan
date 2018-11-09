<template>

    <div id="header">
         <div class="title">
             {{title}}
         </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title : '猫眼电影'
        }
    },
    methods : {
        chooseTitle(to){
            
            to = to || this.$route;
            console.log(to.name)
            switch(to.name){
                case 'film' : return '猫眼电影';
                case 'cinema' : return '影院';
                case 'mine' : return '我的';
                default : return '猫眼电影';
            }
        }
    },
    created(){
        // this.$bus.$on('change1', (val) => {
        //     this.title = val
        // })
         this.title = this.chooseTitle()
        this.$router.beforeEach((to, from, next) => {
            this.title = this.chooseTitle(to)
            next();
        }) 

    }
}
</script>


<style lang="scss">
    #header {
        position:fixed;
        z-index: 3;
        top:0;
        width : 10rem;
        height : 1.346667rem;
        flex-direction: column;
        background : #e54847;
        display: flex;
        justify-content: center;
        color:white;
        .title{
            font-size: 0.48rem;
            align-self: center;
        }
    }
    
</style>


