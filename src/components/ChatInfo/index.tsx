import { ChatMember } from './ChatMember';

export const ChatInfo = () => {
  return (
    <div className="flex flex-col w-full max-w-sm p-4 border-l border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="font-light text-slate-900">Membros</h2>
      </div>

      <ul className="flex flex-col gap-px">
        <li>
          <ChatMember />
        </li>
        <li>
          <ChatMember />
        </li>
        <li>
          <ChatMember />
        </li>
      </ul>
    </div>
  );
};
