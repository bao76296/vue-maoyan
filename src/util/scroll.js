import BetterScroll from 'better-scroll'

const scroll = ({
    el,
    handler
}) => {
    let scroll = new BetterScroll(el, {
        click : true,
        probeType: 2,
        bounce: {
            top: false,
        },
        pullUpLoad: {
            threshold: 50
        }
    })
    scroll.on('pullingUp',async () => {
         await handler();
        scroll.finishPullUp() // 解决拉动刷新
        scroll.refresh() // 重新计算
    })


}

export default scroll;