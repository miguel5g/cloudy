import { useContext } from 'react';

import { chatsContext } from '../contexts/ChatsContext';

export function useChats() {
  return useContext(chatsContext);
}
