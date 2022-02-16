import { useChat } from '../../hooks/useChat';

import { LoadingChat } from '../loading/Chat';
import { ChatBox } from './ChatBox';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';

function randomBoolean() {
  return Math.random() >= 0.5;
}

export const Chat = () => {
  const { isLoading, chat } = useChat();

  if (!isLoading && !chat) {
    return <div>Chat not found</div>;
  }

  if (isLoading) {
    return <LoadingChat />;
  }

  return (
    <div className="flex flex-col flex-1">
      <ChatHeader name={chat!.name} />

      <ul className="flex flex-col flex-1 gap-2 py-8 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200">
        <li>
          <ChatMessage isFirstFromAuthor={randomBoolean()} isSender={randomBoolean()} />
        </li>
        <li>
          <ChatMessage isFirstFromAuthor={randomBoolean()} isSender={randomBoolean()} />
        </li>
        <li>
          <ChatMessage isFirstFromAuthor={randomBoolean()} isSender={randomBoolean()} />
        </li>
        <li>
          <ChatMessage isFirstFromAuthor={randomBoolean()} isSender={randomBoolean()} />
        </li>
        <li>
          <ChatMessage isFirstFromAuthor={randomBoolean()} isSender={randomBoolean()} />
        </li>
      </ul>

      <ChatBox />
    </div>
  );
};
