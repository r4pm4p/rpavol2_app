import type Request from '@/infrastructure/api/Request'
import type Response from '@/infrastructure/contracts/Response'
import { errorStore } from '@/infrastructure/stores/errorsStore'
import { requestStore } from '@/infrastructure/stores/requestStore'
import RegisterUserRule from '../rules/RegisterUserRule'

export default class User {
  public name: string
  public email: string
  public password: string
  private request: Request

  constructor() {
    this.name = ''
    this.email = ''
    this.password = ''
    this.request = requestStore().request
  }

  registerNewUser = async () => {
    try {
      RegisterUserRule.validate(this)
      return await this.request
        .store('/register/user', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res: Response) => {
          if (res.status == '200') return alert('Usuario cadastrado')
        })
    } catch (e: any) {
      errorStore().setErrors(e.message)
    }
  }
}
