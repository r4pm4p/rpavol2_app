import { requestStore } from '@/infrastructure/stores/requestStore'

export default class ProtectedRoutesRules {
  static openRoutes = ['login', 'register_user', 'home']

  static can = (route: string, token: string) => {
    return true
    // try {
    //   if (token) {
    //     ProtectedRoutesRules.canWithToken(route)
    //   } else {
    //     ProtectedRoutesRules.canWithoutToken(route)
    //   }

    //   return true
    // } catch (e) {
    //   return false
    // }
  }

  static canWithoutToken = (route: string) => {
    if (ProtectedRoutesRules.openRoutes.includes(route)) {
      return true
    } else {
      throw new Error('User can access')
    }
  }

  static canWithToken = (route: string) => {
    if (ProtectedRoutesRules.openRoutes.includes(route)) {
      return true
    } else {
      throw new Error('User can access')
    }
  }
}
