import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CreateChatModal } from './CreateChatModal';

export const ChatsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex items-center justify-between px-4 pt-2">
      <h2 className="font-light text-slate-900">Conversas</h2>

      <button
        className="flex items-center p-1 transition hover:opacity-75"
        onClick={handleOpenModal}
      >
        <FiPlus className="text-sky-500" />
      </button>

      <CreateChatModal isOpen={isOpen} onRequestClose={handleCloseModal} />
    </div>
  );
};
