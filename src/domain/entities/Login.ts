import { requestStore } from '@/infrastructure/stores/requestStore'
import { errorStore } from '@/infrastructure/stores/errorsStore'
import type Request from '@/infrastructure/api/Request'
import type Response from '@/infrastructure/contracts/Response'
import LoginRule from '../rules/LoginRule'
import { useRouter } from 'vue-router'

export default class Login {
  public email: string
  public password: string
  private request: Request

  constructor() {
    this.request = requestStore().request
    this.email = ''
    this.password = ''
  }

  attemptToLogin = async () => {
    try {
      LoginRule.validate(this)
      return await this.request
        .store('/login', {
          email: this.email,
          password: this.password,
        })
        .then((res: Response) => {
          if (res.status == '200') return this.loginWithSuccess(res.content.token)
        })
    } catch (e: any) {
      if (e.message === 'axs_error') {
        alert('Api respondeu com erru')
      } else {
        errorStore().setErrors(e.message)
      }
    }
  }

  private loginWithSuccess = (token: string) => {
    this.request.setToken(token)
  }
}
