import Vue from 'vue'
import App from './App'
import axios from 'axios'
import { request } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App)
})

//一、基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   //method: 'get'//post
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//    相当于http://123.207.32.32:8000/home/data?pop&page=1
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })


//二、axios发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params:
//   {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
//   console.log(results[0]);
//   console.log(results[1]);
// })


//三、使用全局axios和对应的配置在进行网络请求
// axios.defaults.baseUrl = 'http://123.207.32.32:8000',
//   axios.defaults.timeout = 5000,

//   axios.all([axios({//配置信息
//     // baseURL:'http://123.207.32.32:8000',相同的都抽出去
//     // timeout:5,//超时时间
//     url: '/home/multidata',
//   }), axios({
//     // baseURL: 'http://123.207.32.32:8000',
//     // timeout: 5,//超时时间
//     url: '/home/data',
//     params:
//     {
//       type: 'sell',
//       page: 5
//     }
//   })]).then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }))

//   axios.defaults.baseURL='http://222.111.33.33:8000'
//   axios.defaults.timeout=10000
//   axios({
//     url:'http://123.207.32.32:8000/category'
//   })


//四、创建对应的axios的实例
// const instace1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instace1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// instace1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
// const instace2=axios.create({
//   baseURL:'http://222.111.33.33:8000',
//  timeout:10000,
//  //headers:{}
// })

//对应方法1、封装request模块
// request({//第一个参数
//   url: '/home/multidata'
// }, res => {//第二个参数
//   console.log(res);
// }, err => {//第三个参数
//   console.log(err)
// })

//对应方法2
// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {

//   }
// })

//对应方法3
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

//对应方法4
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
