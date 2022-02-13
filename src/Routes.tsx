import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChatOpen, Home, Instructions } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Instructions />} />
          <Route path="chats/:id" element={<ChatOpen />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};
