import { createContext, useEffect, useState } from 'react';

import { getChats } from '../lib/Chats';
import { ChatPreview } from '../typings';

interface ChatsContextType {
  isLoading: boolean;
  chats: ChatPreview[] | null;
}

export const chatsContext = createContext({} as ChatsContextType);

export const ChatsContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [chats, setChats] = useState<ChatPreview[] | null>(null);

  // Get preview chats
  useEffect(() => {
    getChats()
      .then((chats) => {
        setChats(chats);
      })
      .catch((error) => {
        /* TODO: Improvement user feedback */
        console.error(error);
        setChats([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <chatsContext.Provider
      value={{
        isLoading,
        chats,
      }}
    >
      {children}
    </chatsContext.Provider>
  );
};
