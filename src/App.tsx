import { AuthContextProvider } from './contexts/AuthContext';
import { ChatsContextProvider } from './contexts/ChatsContext';
import { SocketContextProvider } from './contexts/SocketContext';
import { AppRoutes } from './Routes';

import './styles/globals.css';

export const App = () => {
  return (
    <SocketContextProvider>
      <AuthContextProvider>
        <ChatsContextProvider>
          <AppRoutes />
        </ChatsContextProvider>
      </AuthContextProvider>
    </SocketContextProvider>
  );
};
