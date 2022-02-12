import { ChatPreview } from '../typings';

export async function getChats(): Promise<ChatPreview[]> {
  /* TODO: Implement a http request */

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

  return new Promise<ChatPreview[]>((resolve, _reject) => {
    setTimeout(() => {
      resolve(chats);
    }, 200);
  });
}
