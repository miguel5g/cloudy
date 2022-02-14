import { useContext } from 'react';

import { chatContext } from '../contexts/ChatContext';

export function useChat() {
  return useContext(chatContext);
}
