import { useEffect, useState } from 'react';

import { getChat, getChats } from '../lib/Chats';
import { Chat, ChatPreview, Message } from '../typings';

interface UseChatsType {
  isLoading: boolean;
  chats: ChatPreview[] | null;
}

interface UseChatType {
  isLoading: boolean;
  chat: Chat | null;
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

export function useChat(id?: string): UseChatType {
  const [isLoading, setLoading] = useState(true);
  const [chat, setChat] = useState<Chat | null>(null);

  useEffect(() => {
    if (!id) {
      isLoading && setLoading(false);
      return;
    }

    getChat(id)
      .then((chat) => {
        setChat(chat);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {
    isLoading,
    chat,
  };
}
