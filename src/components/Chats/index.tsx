import { FiSend } from 'react-icons/fi';
import { ChatLink } from './ChatLink';
import { ChatsHeader } from './ChatsHeader';

export const Chats = () => {
  return (
    <section className="flex flex-col w-full max-w-sm gap-4 p-4 overflow-y-auto border-r border-gray-200">
      <ChatsHeader />

      <ul className="flex flex-col gap-px">
        <li>
          <ChatLink />
        </li>
        <li>
          <ChatLink />
        </li>
        <li>
          <ChatLink />
        </li>
      </ul>

      <div className="flex items-center gap-4 px-4 py-3 mt-auto rounded-lg cursor-pointer bg-slate-300/20">
        <FiSend className="text-slate-500" />
        <span className="text-slate-700">Enviar feedbacks</span>
      </div>
    </section>
  );
};
