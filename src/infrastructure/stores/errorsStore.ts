import { defineStore } from 'pinia'

export const errorStore = defineStore('errors', {
  state: () => ({
    errors: {},
  }),
  actions: {
    setErrors(e: string) {
      this.errors = JSON.parse(e)
    },
  },
  getters: {
    getErrors: (state) => state.errors,
  },
})
