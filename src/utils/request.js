/*
* @Author: Active code page: 65001
lvhang
* @Date:   2021-01-04 20:56:17
* @Last Modified by:   Active code page: 65001
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang
lvhang 基于 axios 封装的请求模块！
* @Last Modified time: 2021-01-05 10:14:43
*/
import axios from 'axios'

// 创建一个 axios 实例，说白了就是复制了一个 axios
// 我们通过这个实例去发请求，把需要的配置配置给这个实例处理
const request = axios.create({
 baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径！
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要使用谁就加载 request 模块！