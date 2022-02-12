import { Link } from 'react-router-dom';

import { ChatPreview } from '../../typings';

interface ChatLinkProps {
  chat?: ChatPreview;
}

export const ChatLink = ({}: ChatLinkProps) => {
  return (
    <Link to={`/chats/${'id'}`}>
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gradient-to-r from-slate-300/20 to-slate-300/10">
        <img
          className="w-12 h-12 rounded-lg"
          src="https://dummyimage.com/64x64"
          alt="Chat avatar"
        />

        <div className="flex flex-col flex-1">
          <h3 className="font-medium text-slate-700">Chat name</h3>
          <span className="-mt-1 text-sm font-light text-slate-500">
            Você: Olá! esta é uma mensagem
          </span>
        </div>

        {/* TODO: Add last message time info */}
      </div>
    </Link>
  );
};
