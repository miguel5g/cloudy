import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Chat } from './components/Chat';
import { ChatInfo } from './components/ChatInfo';
import { Instructions } from './components/Instructions';
import { Home } from './pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Instructions />} />
          <Route
            path="chats/:id"
            element={
              <>
                <Chat />

                <ChatInfo />
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
