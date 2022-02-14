import { Toaster } from 'react-hot-toast';

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
          <Toaster position="top-center" />
        </ChatsContextProvider>
      </AuthContextProvider>
    </SocketContextProvider>
  );
};
