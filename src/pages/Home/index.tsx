import { Outlet } from 'react-router-dom';

import { Apps } from '../../components/Apps';
import { Chats } from '../../components/Chats';
import { Header } from '../../components/Header';
import { ChatContextProvider } from '../../contexts/ChatContext';

export { ChatOpen } from './ChatOpen';
export { Instructions } from './Instructions';

export const Home = () => {
  return (
    <ChatContextProvider>
      <div className="flex h-screen">
        <Apps />

        <section className="flex flex-col flex-1">
          <Header />

          <main className="flex flex-1 overflow-hidden">
            <Chats />

            <Outlet />
          </main>
        </section>
      </div>
    </ChatContextProvider>
  );
};
