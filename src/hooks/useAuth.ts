import { useContext } from 'react';

import { authContext } from '../contexts/AuthContext';

export function useAuth() {
  return useContext(authContext);
}
