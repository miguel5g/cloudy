import toast from 'react-hot-toast';
import { useState } from 'react';
import { FiInfo, FiSearch } from 'react-icons/fi';

import searchingSVG from '../../assets/svg/searching.svg';
import voidSVG from '../../assets/svg/void.svg';

import { ChatPreview } from '../../typings';

import { TextInput } from '../TextInput';
import { SearchResults } from './SearchResults';
import { EmptyState } from './EmptyState';
import { ModalContainer, ModalContainerProps } from './ModalContainer';

export const CreateChatModal = ({ isOpen, onRequestClose }: ModalContainerProps) => {
  const [search, setSearch] = useState('');
  const [chats, setChats] = useState<ChatPreview[] | null>(null);

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    toast('Ainda não está funcionando =/');
  }

  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
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

      {chats === null && <EmptyState label="Tente pesquisar algum código" src={searchingSVG} />}

      {chats !== null && chats.length === 0 && (
        <EmptyState label="Não encontramos nenhum resultado" src={voidSVG} />
      )}

      {chats && chats.length > 0 && <SearchResults results={chats} />}
    </ModalContainer>
  );
};
