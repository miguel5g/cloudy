import { FiPlus } from 'react-icons/fi';

export const ChatsHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-2">
      <h2 className="font-light text-slate-900">Conversas</h2>

      <button className="flex items-center p-1 transition hover:opacity-75">
        <FiPlus className="text-sky-500" />
      </button>
    </div>
  );
};
