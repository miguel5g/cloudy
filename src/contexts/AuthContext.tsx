import { createContext, useEffect, useState } from 'react';

import { User } from '../typings';

interface AuthContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export const authContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    /* TODO: Implement auth checker */
    setTimeout(() => {
      setUser({
        id: '1',
        name: 'John Doe',
        avatarUrl: 'https://via.placeholder.com/64',
      });
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <authContext.Provider
      value={{
        isLoading,
        isAuthenticated: !!user,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
