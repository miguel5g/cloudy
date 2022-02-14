import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChat } from '../lib/Chats';

import { Chat } from '../typings';

export function useChat() {
  const [isLoading, setIsLoading] = useState(true);
  const [chat, setChat] = useState<Chat | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      isLoading && setIsLoading(false);
      return;
    }

    !isLoading && setIsLoading(true);

    getChat(id)
      .then((chat) => {
        setChat(chat);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { isLoading, chat };
}
