// import { constantsRouters } from '@/router/routers'
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user/index'
// 引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import { constantsRouters } from '@/router/routers'
// 创建用户小仓库
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRouters: constantsRouters, // 仓库存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      // 存储当前用户是否包含某一个按钮
      buttons: [],
    }
  },
  actions: {
    // atguigu123
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)
      console.log(result)
      if (result.code === 200) {
        // 由于pinia存储数据其实利用的是js对象
        this.token = result.data as string
        // 本地存储持久化存储一份
        // localStorage.setItem('TOKEN', (result.data.token as string))
        SET_TOKEN(result.data as string)
        // 保证当前sync函数返回一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data))
      }
    },
    // 获取用户信息
    async userInfo() {
      const result = await reqUserInfo()
      console.log('result', result)
      if (result.code === 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
      }
    },
    // 退出登录
    async userLogout() {
      //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
      REMOVE_TOKEN()
      // 退出登录请求
      const result: any = await reqLogout()
      if (result.code === 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  },
  getters: {},
})

export default useUserStore
