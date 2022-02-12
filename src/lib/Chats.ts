import { Chat, ChatPreview } from '../typings';

/* Sample data */
const chats: ChatPreview[] = [
  {
    id: '1',
    name: 'Chat 1',
    pictureUrl: 'https://via.placeholder.com/64',
    lastMessage: {
      id: '1',
      content: 'Hello',
      author: { id: '1', name: 'User 1', avatarUrl: 'https://via.placeholder.com/64' },
    },
  },
  {
    id: '2',
    name: 'Chat 2',
    pictureUrl: 'https://via.placeholder.com/64',
    lastMessage: {
      id: '2',
      content: 'Message 2',
      author: { id: '2', name: 'User 2', avatarUrl: 'https://via.placeholder.com/64' },
    },
  },
];

export async function getChats(): Promise<ChatPreview[]> {
  /* TODO: Implement a http request */

  return new Promise<ChatPreview[]>((resolve, _reject) => {
    setTimeout(() => {
      resolve(chats);
    }, 200);
  });
}

export async function getChat(id: string): Promise<Chat | null> {
  return new Promise<Chat | null>((resolve, _reject) => {
    setTimeout(() => {
      const chat = chats.find((chat) => chat.id === id);

      if (!chat) return resolve(null);

      resolve({
        ...chat,
        members: [
          { id: '1', name: 'User 1', avatarUrl: 'https://via.placeholder.com/64/e0f2fe' },
          { id: '2', name: 'User 2', avatarUrl: 'https://via.placeholder.com/64/e0f2fe' },
          { id: '3', name: 'User 3', avatarUrl: 'https://via.placeholder.com/64/e0f2fe' },
        ],
      });
    }, 200);
  });
}
