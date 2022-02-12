import { AuthContextProvider } from './contexts/AuthContext';
import { AppRoutes } from './Routes';

import './styles/globals.css';

export const App = () => {
  return (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  );
};
