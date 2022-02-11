import { ChatBox } from './ChatBox';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';

function randomBoolean() {
  return Math.random() >= 0.5;
}

export const Chat = () => {
  return (
    <div className="flex flex-col flex-1">
      <ChatHeader name="Chat name" />

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
