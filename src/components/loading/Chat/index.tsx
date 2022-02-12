import { ChatBox } from '../../Chat/ChatBox';
import { LoadingMessage } from './LoadingMessage';

export const LoadingChat = () => {
  return (
    <div className="flex flex-col flex-1">
      <header className="px-8 py-4 border-b border-gray-200">
        <div className="w-3/5 h-8 rounded-lg bg-slate-200 animate-pulse" />
      </header>

      <ul className="flex flex-col flex-1 gap-2 py-8 overflow-y-auto">
        <li>
          <LoadingMessage isSender={false} />
        </li>
        <li>
          <LoadingMessage isSender={true} />
        </li>
        <li>
          <LoadingMessage isSender={false} />
        </li>
        <li>
          <LoadingMessage isSender={true} />
        </li>
      </ul>

      <ChatBox />
    </div>
  );
};
