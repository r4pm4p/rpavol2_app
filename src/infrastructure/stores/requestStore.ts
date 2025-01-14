import Request from '@/infrastructure/api/Request'
import { defineStore } from 'pinia'

var request = new Request()

export const requestStore = defineStore('request', {
  state: () => ({
    ruleError: 'zero' as string,
  }),
  actions: {
    setToken(token: string) {
      request.setToken(token)
    },
    setErrors(e: string) {
      this.ruleError = e
    },
  },
  getters: {
    request: (state) => request,
    getRuleError: (state) => state.ruleError,
  },
})
