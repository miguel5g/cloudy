import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiInfo, FiSearch } from 'react-icons/fi';

import searchingSVG from '../../assets/svg/searching.svg';
import voidSVG from '../../assets/svg/void.svg';

import { ChatPreview, Message } from '../../typings';
import { TextInput } from '../TextInput';
import { ChatPreviewCard } from './ChatPreviewCard';

interface CreateChatModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const CreateChatModal = ({ isOpen, onRequestClose }: CreateChatModalProps) => {
  const [search, setSearch] = useState('');
  const [chats, setChats] = useState<ChatPreview[] | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    toast('Ainda não está funcionando =/');
  }

  function handleCloseModal(event: React.MouseEvent<HTMLDivElement>) {
    if (overlayRef.current && overlayRef.current === event.target) onRequestClose();
  }

  function previewChatFactory(id: string): ChatPreview {
    return { id, name: 'Chat ' + id, pictureUrl: '', lastMessage: {} as Message };
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60"
      ref={overlayRef}
      initial={{ opacity: 0, pointerEvents: 'none' }}
      animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      onClick={handleCloseModal}
    >
      <motion.div
        className="flex flex-col w-full max-w-md p-12 bg-white rounded-lg shadow-lg"
        initial={{ y: '50%', opacity: 0 }}
        animate={{ y: isOpen ? '0%' : '50%', opacity: isOpen ? 1 : 0 }}
      >
        <h2 className="mb-8 text-2xl font-medium text-center">Nova Conversa</h2>

        <form className="flex gap-2" onSubmit={handleSearchSubmit}>
          <TextInput
            type="search"
            placeholder="Código do usuário ou do grupo"
            maxLength={6}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button
            className="flex items-center justify-center px-6 transition rounded-lg bg-sky-500/10 hover:bg-sky-700/10"
            type="submit"
          >
            <FiSearch className="text-sky-500" />
          </button>
        </form>

        <span className="flex items-center gap-1 mt-2 text-sm font-light text-slate-600">
          <FiInfo className="mb-0.5" />
          Seu código de usuário é <strong className="font-medium text-slate-500">A1B2C3</strong>
        </span>

        {chats === null && (
          <div className="flex flex-col items-center justify-center mt-8">
            <img className="w-48 h-48" src={searchingSVG} alt="Searching" />
            <span className="mt-4 text-xl font-light text-slate-900">
              Tente pesquisar algum código.
            </span>
          </div>
        )}

        {chats !== null && chats.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-8">
            <img className="w-48 h-48" src={voidSVG} alt="Not found" />
            <span className="mt-4 text-xl font-light text-slate-900">
              Não encontramos nenhum resultado.
            </span>
          </div>
        )}

        {chats && chats.length > 0 && (
          <div className="relative mt-8">
            <ul className="hidden-scrollbar flex gap-4 overflow-x-auto w-[calc(100%+4rem)] -translate-x-[2rem] px-8">
              <li>
                <ChatPreviewCard chat={previewChatFactory('1')} />
              </li>
              <li>
                <ChatPreviewCard chat={previewChatFactory('2')} />
              </li>
              <li>
                <ChatPreviewCard chat={previewChatFactory('3')} />
              </li>
              <li>
                <ChatPreviewCard chat={previewChatFactory('4')} />
              </li>
            </ul>

            <div className="absolute top-0 w-8 h-full bg-gradient-to-r from-white to-transparent -left-[calc(2rem+1px)]" />
            <div className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent to-white -right-[calc(2rem+1px)]" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
