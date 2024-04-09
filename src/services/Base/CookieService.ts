// @ts-ignore
import { useCookies } from 'vue3-cookies'

export class CookieService {
  public getToken = () => {
    const { cookies } = useCookies()
    return cookies.get('token')
  }
  public removeToken = () => {
    const { cookies } = useCookies()
    return cookies.remove('token')
  }
  public setToken = (value: string) => {
    const { cookies } = useCookies()
    return cookies.set('token', value)
  }
}
