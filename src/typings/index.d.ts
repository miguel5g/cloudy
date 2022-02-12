export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Message {
  id: string;
  content: string;
  author: User;
}

export interface ChatPreview {
  id: string;
  name: string;
  pictureUrl: string;
  lastMessage: Message;
}

export interface Chat {
  id: string;
  name: string;
  pictureUrl: string;
  members: User[];
}
