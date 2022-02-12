import { Link } from 'react-router-dom';

import { ChatPreview } from '../../typings';

interface ChatLinkProps {
  chat: ChatPreview;
}

export const ChatLink = ({ chat }: ChatLinkProps) => {
  const isSender = chat.lastMessage.author.id === '1';

  return (
    <Link to={`/chats/${chat.id}`}>
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gradient-to-r from-slate-300/20 to-slate-300/10">
        <img className="w-12 h-12 rounded-lg" src={chat.pictureUrl} alt="Chat avatar" />

        <div className="flex flex-col flex-1">
          <h3 className="font-medium text-slate-700">{chat.name}</h3>
          <span className="-mt-1 text-sm font-light text-slate-500">
            {isSender ? 'Você' : chat.lastMessage.author.name}: {chat.lastMessage.content}
          </span>
        </div>

        {/* TODO: Add last message time info */}
      </div>
    </Link>
  );
};
