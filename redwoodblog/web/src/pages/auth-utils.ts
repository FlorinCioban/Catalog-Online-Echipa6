import { routes } from '@redwoodjs/router'

export function getHomePageForRole(roles: string | string[]) {
  const role = roles instanceof Array ? roles[0] : roles

  switch (role) {
    case 'superadmin':
      return routes.signup()
    case 'admin':
      return routes.signup()
    case 'teacher':
      return routes.grades()
    case 'student':
      return routes.studentHome()
    default:
      throw new Error(`Unknown role "${role}"`)
  }
}
