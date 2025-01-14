import type Login from '../entities/Login'
import type Rule from '../interfaces/Rule'

export default class LoginRule implements Rule {
  static validate = (login: Login): void => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (login.email.length == 0 || login.email == null) throw new Error('Email cannot be empty')

    if (login.password.length == 0 || login.password == null)
      throw new Error('Password cannot be empty')

    if (!emailRegex.test(login.email)) throw new Error('Email is invalid')

    if (login.password.length < 8) throw new Error('Password is to short')
  }
}
