import { Apps } from '../../components/Apps';
import { Chats } from '../../components/Chats';
import { Header } from '../../components/Header';
import { Instructions } from '../../components/Instructions';

export const Home = () => {
  return (
    <div className="flex h-screen">
      <Apps />

      <section className="flex flex-col flex-1">
        <Header />

        <main className="flex flex-1 overflow-hidden">
          <Chats />

          <Instructions />
        </main>
      </section>
    </div>
  );
};
