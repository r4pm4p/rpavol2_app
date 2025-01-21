import type Rule from '../interfaces/Rule'
import User from '../entities/User'

export default class RegisterUserRule implements Rule {
  static validate = (user: User): void => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errorPayload: any = {}
    let errorFlag: boolean = false

    if (user.email.length == 0 || user.email == null) {
      errorFlag = true
      errorPayload.email = 'Email cannot be empty'
    }

    if (user.password.length == 0 || user.password == null) {
      errorFlag = true
      errorPayload.password = 'Password cannot be empty'
    }

    if (user.name.length == 0 || user.name == null) {
      errorFlag = true
      errorPayload.name = 'Name cannot be empty'
    }

    if (!emailRegex.test(user.email)) {
      errorFlag = true
      errorPayload.email = 'Email is invalid'
    }
    if (user.password.length < 8) {
      errorFlag = true
      errorPayload.password = 'Password must have 8 characters at least'
    }
    if (errorFlag) throw new Error(JSON.stringify(errorPayload))
  }
}
