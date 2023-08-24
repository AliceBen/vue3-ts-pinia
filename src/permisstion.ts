// 路由鉴权：某一个路由什么条件下可以访问、什么条件下不可以访问
import router from '@/router'
import setting from './setting'
// 任意路由切换实现进度条业务
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
// 去掉加载的小球
nprogress.configure({ showSpinner: false })

import pinia from './store'
import useUserStore from './store/modules/user'
const userStore = useUserStore(pinia)


router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title}-${to.meta.title}`
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      //登录成功访问其余六个路由(登录排除)
      if (username) {
        next()
      } else {
        try {
          // 获取用户信息
          await userStore.userInfo()
          // 刷新的时候是异步路由。有可能获取到用户信息异步路由还没加载完出现白屏的情况
          next({...to})
        } catch (error) {
          // token过期退出登录
          await userStore.userLogout()
          next({path: '/login', query: {redirect: to.path}})
        }
      }
    }
  } else{
    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login', query: {redirect: to.path}})
    }
  }
  
})

router.afterEach(async (to: any, from: any, next: any) => {
  nprogress.done()
})