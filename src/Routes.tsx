import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';

import { UnAuthenticatedRedirect } from './components/UnAuthenticatedRedirect';
import { ChatOpen, Home, Instructions } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />}>
              <Route index element={<Instructions />} />
              <Route path="chats/:id" element={<ChatOpen />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/" element={<UnAuthenticatedRedirect />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
