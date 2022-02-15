import { Link } from 'react-router-dom';

import { ChatPreview } from '../../typings';

interface ChatPreviewProps {
  chat: ChatPreview;
}

export const ChatPreviewCard = ({ chat }: ChatPreviewProps) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Chat picture */}
      <div className="w-32 h-32 rounded-2xl bg-slate-200 animate-pulse" />

      {/* Chat name */}
      <span>{chat.name}</span>

      <Link
        className="flex items-center justify-center py-2 transition rounded-lg bg-sky-500/10 hover:bg-sky-700/10"
        to={`/chat/${chat.id}/join`}
      >
        Entrar
      </Link>
    </div>
  );
};
