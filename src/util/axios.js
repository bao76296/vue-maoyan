import axios from 'axios'

const ajax = (options) => {
    let _react = options.react === undefined ? true : options.react;
    return axios(options)
        .then(res => {
            if(_react) console.log('成功')
            return res;
        })
        .catch( err => {
            if(_react) console.log('失败')
            
        })
}


export default ajax;