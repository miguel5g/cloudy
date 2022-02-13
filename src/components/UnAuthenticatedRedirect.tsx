import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const UnAuthenticatedRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname === '/') navigate('/signin');
  }, [isAuthenticated, isLoading, pathname]);

  return null;
};
