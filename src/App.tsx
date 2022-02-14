import { AuthContextProvider } from './contexts/AuthContext';
import { SocketContextProvider } from './contexts/SocketContext';
import { AppRoutes } from './Routes';

import './styles/globals.css';

export const App = () => {
  return (
    <SocketContextProvider>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </SocketContextProvider>
  );
};
