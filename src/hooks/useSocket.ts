import { useContext } from 'react';
import { socketContext } from '../contexts/SocketContext';

export function useSocket() {
  return useContext(socketContext);
}
