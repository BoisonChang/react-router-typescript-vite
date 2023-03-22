import { AuthContext } from '../contexts/AuthContext';
import * as React from 'react';

export function useAuth() {
  return React.useContext(AuthContext);
}
