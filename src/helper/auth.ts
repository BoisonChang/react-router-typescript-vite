import { AuthRequirement, Path } from '../const';

export const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export const getAuthRequirement = (path: string, auth: {user: string}) => {
  if (path.includes(Path.PROTECTED)) {
    if (!auth.user) {
      return AuthRequirement.LOGIN;
    } else if (auth.user !== 'Admin') {
      return AuthRequirement.NOTHING_HERE;
    }
  } else if (path.includes(Path.DASHBOARD)) {
    if (!auth.user) {
      return AuthRequirement.LOGIN;
    } else if (auth.user === 'Admin') {
      return AuthRequirement.NOTHING_HERE;
    }
  }
  return AuthRequirement.NONE;
};
