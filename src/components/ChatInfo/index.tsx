import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getChat } from '../../lib/Chats';
import { Chat } from '../../typings';

import { ChatMember } from './ChatMember';

export const ChatInfo = () => {
  const [chat, setChat] = useState<Chat | null>(null);

  const params = useParams();

  useEffect(() => {
    const id = params.id;

    if (!id) return;

    getChat(id).then(setChat);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-sm p-4 overflow-y-auto border-l border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="font-light text-slate-900">Membros</h2>
      </div>

      <ul className="flex flex-col gap-px">
        {chat &&
          chat.members.map((member) => (
            <li key={member.id}>
              <ChatMember member={member} />
            </li>
          ))}
      </ul>
    </div>
  );
};
