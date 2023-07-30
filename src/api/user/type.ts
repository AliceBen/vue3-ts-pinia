export interface loginFormData {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface loginResponseData {
  code: number
  data: dataType
}

export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
