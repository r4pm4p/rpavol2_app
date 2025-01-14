import Request from '@/infrastructure/api/Request'
import { defineStore } from 'pinia'

var request = new Request()

export const requestStore = defineStore('request', {
  state: () => ({}),
  actions: {
    setToken(token: string) {
      request.setToken(token)
    },
  },
  getters: {
    request: (state) => request,
  },
})
