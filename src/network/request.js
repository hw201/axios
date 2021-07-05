import axios from "axios";

//对应方法4
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    //比如config中的一些信息不符合服务器要求
    //比如每次发送网络请求时都希望在界面中显示一个请求的图标
    //某些网络请求（比如登录（token)),必须携带一些特殊信息
    return config
  }, err => {
    console.log(err);
  })
  //响应式拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, err => {
    console.log(err);

  })
  //发送真正的网络请求
  return instance(config)//相当于返回promise
}

//对应方法3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     //发送真正的网络请求
//     instance(config).then(res => {
//       resolve(res);
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

//对应方法2
// export function request(config) {
//   //创建实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     config.success(res);
//   }).catch(err => {
//     config.failure(err)
//   })
// }


//方法1、封装request模块
// export function request(config, success, failure) {
//   //创建实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   //发送真正的网络请求
//   instance(config).then(res => {
//     success(res);
//   }).catch(err => {
//     failure(err)
//   })
// }
