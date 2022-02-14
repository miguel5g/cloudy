import { createContext, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface SocketContextType {
  socket: Socket | null;
}

export const socketContext = createContext({} as SocketContextType);

export const SocketContextProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to the socket
    const newSocket = io('http://localhost:4000');

    // Update the state
    setSocket(newSocket);

    // Cleanup function
    return () => {
      newSocket.close();
    };
  }, []);

  return <socketContext.Provider value={{ socket }}>{children}</socketContext.Provider>;
};
