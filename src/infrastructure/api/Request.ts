import axios from 'axios'

export default class Request {
  private request: any
  private baseURL: string = `${import.meta.env.VITE_API_URL}`

  constructor() {
    this.request = axios.create({
      timeout: 10000,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem('user.token')}`
      // }
    })
  }

  public async get(route: string, data: any = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.get(route)
      return await response.data
    } catch (error) {
      throw new Error(JSON.stringify({ api: error }))
    }
  }

  public async store(route: string, data: any = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.post(route, data)

      return await response.data
    } catch (error) {
      throw new Error(JSON.stringify({ api: error }))
    }
  }

  public async update(route: string, data: Object = {}): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.put(route, (data = data))

      return await response.data
    } catch (error) {
      throw new Error(JSON.stringify({ api: error }))
    }
  }

  public async destroy(route: string): Promise<any> {
    try {
      this.request.defaults.baseURL = this.baseURL

      let response: any = await this.request.delete(route)

      return await response.data
    } catch (error) {
      throw new Error(JSON.stringify({ api: error }))
    }
  }

  public async setToken(token: string) {
    const bearerToken = `Bearer ${token}`
    this.request.defaults.headers.common['Authorization'] = `${bearerToken}`
  }

  public getToken() {
    return this.request.defaults.headers.common['Authorization']
  }
}
