import { createContext, useState } from 'react';
import { fakeAuthProvider } from '../helper/auth';

type User = any;
type Callback = () => void;

interface AuthContextType {
  user: User | null;
  signin: (user: string, callback: Callback) => void;
  signout: (callback: Callback) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signin: () => {},
  signout: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signin = (newUser: string, callback: Callback) =>
    fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });

  const signout = (callback: Callback) =>
    fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });

  const value: AuthContextType = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
