import { useParams } from 'react-router-dom';

import { useChat } from '../../hooks/useChats';
import { LoadingChat } from '../loading/Chat';

import { ChatBox } from './ChatBox';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';

function randomBoolean() {
  return Math.random() >= 0.5;
}

export const Chat = () => {
  const { id } = useParams();
  const { chat, isLoading } = useChat(id);

  if (!isLoading && !chat) {
    return <div>Chat not found</div>;
  }

  if (isLoading) {
    return <LoadingChat />;
  }

  return (
    <div className="flex flex-col flex-1">
      <ChatHeader name={chat!.name} />

      <ul className="flex flex-col flex-1 gap-2 py-8 overflow-y-auto">
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
