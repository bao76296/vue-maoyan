import axios from 'axios'

const ajax = (options) => {
    let _react = options.react === undefined ? true : options.react;
    return axios(options)
        .then(res => {
            console.log(res);
        })
        .catch( err => {
            console.log(err)
        })
}


export default ajax;