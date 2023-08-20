import { RouteRecordRaw } from 'vue-router'

export interface UserState {
  token: string | null,
  menuRouters: RouteRecordRaw[]
}
