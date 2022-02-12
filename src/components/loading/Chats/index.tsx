import { FiAward, FiPlus } from 'react-icons/fi';

import { LoadingChatLink } from './LoadingChatLink';

export const LoadingChats = () => {
  return (
    <section className="flex flex-col w-full max-w-sm gap-4 p-4 overflow-y-auto border-r border-gray-200">
      <div className="flex items-center justify-between px-4 pt-2">
        <h2 className="font-light text-slate-900">Conversas</h2>

        <button className="flex items-center p-1 transition hover:opacity-75">
          <FiPlus className="text-sky-500" />
        </button>
      </div>

      <ul className="flex flex-col gap-1">
        <li>
          <LoadingChatLink />
        </li>
        <li>
          <LoadingChatLink />
        </li>
        <li>
          <LoadingChatLink />
        </li>
      </ul>

      <div className="flex items-center gap-4 px-4 py-3 mt-auto transition rounded-lg cursor-pointer bg-gradient-to-br from-sky-500/10 to-sky-600/20 hover:opacity-75">
        <FiAward className="text-sky-500" />
        <span className="text-slate-900">Enviar feedbacks</span>
      </div>
    </section>
  );
};
