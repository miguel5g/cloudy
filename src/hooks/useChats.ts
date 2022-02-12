import { useEffect, useState } from 'react';

import { getChats } from '../lib/Chats';
import { ChatPreview } from '../typings';

interface UseChatsType {
  isLoading: boolean;
  chats: ChatPreview[] | null;
}

export function useChats(): UseChatsType {
  const [isLoading, setLoading] = useState(true);
  const [chats, setChats] = useState<ChatPreview[] | null>(null);

  useEffect(() => {
    /* TODO: Implement auth check */

    getChats()
      .then((chats) => {
        setChats(chats);
      })
      .catch((error) => {
        console.error(error);
        setChats([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    isLoading,
    chats,
  };
}
