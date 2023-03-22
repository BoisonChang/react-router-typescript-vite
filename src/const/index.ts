export enum AuthRequirement {
  NONE,
  LOGIN,
  ADMIN_ONLY,
  NOTHING_HERE,
}

export enum Path {
  PROTECTED = '/protected',
  DASHBOARD = '/dashboard',
  HOME = '/',
  ABOUT = '/about',
  CONTACT = '/contact',
  LOGIN = '/login',
  NOMATCH = '/nothing-here',
  OTHERS = '/*',
}
