import { FiAward } from 'react-icons/fi';

import { ChatLink } from './ChatLink';
import { ChatsHeader } from './ChatsHeader';

import { useChats } from '../../hooks/useChats';

export const Chats = () => {
  const { chats } = useChats();

  return (
    <section className="flex flex-col w-full max-w-sm gap-4 p-4 overflow-y-auto border-r border-gray-200">
      <ChatsHeader />

      <ul className="flex flex-col gap-px">
        {chats &&
          chats.map((chat) => (
            <li key={chat.id}>
              <ChatLink chat={chat} />
            </li>
          ))}
      </ul>

      <div className="flex items-center gap-4 px-4 py-3 mt-auto transition rounded-lg cursor-pointer bg-gradient-to-br from-sky-500/10 to-sky-600/20 hover:opacity-75">
        <FiAward className="text-sky-500" />
        <span className="text-slate-900">Enviar feedbacks</span>
      </div>
    </section>
  );
};
