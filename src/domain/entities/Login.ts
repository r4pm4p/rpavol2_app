import type Request from '@/infrastructure/api/Request'
import type Response from '@/infrastructure/contracts/Response'
import { requestStore } from '@/infrastructure/stores/requestStore'
import LoginRule from '../rules/LoginRule'

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
          // Adicionar modal
          alert('sucesso')
        })
    } catch (e) {
      //@ts-expect-error
      alert(e.message)
    }
  }
}
