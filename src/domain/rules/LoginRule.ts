import type Login from '../entities/Login'
import type Rule from '../interfaces/Rule'

export default class LoginRule implements Rule {
  static validate = (login: Login): void => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errorPayload: any = {}
    let errorFlag: boolean = false

    if (login.email.length == 0 || login.email == null) {
      errorFlag = true
      errorPayload.email = 'Email cannot be empty'
    }

    if (login.password.length == 0 || login.password == null) {
      errorFlag = true
      errorPayload.password = 'Password cannot be empty'
    }
    if (!emailRegex.test(login.email)) {
      errorFlag = true
      errorPayload.email = 'Email is invalid'
    }
    if (login.password.length < 8) {
      errorFlag = true
      errorPayload.password = 'Password must have 8 characters at least'
    }

    if (errorFlag) throw new Error(JSON.stringify(errorPayload))
  }
}
