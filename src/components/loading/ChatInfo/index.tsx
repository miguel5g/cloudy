import { LoadingChatMember } from './LoadingChatMember';

export const LoadingChatInfo = () => {
  return (
    <div className="flex flex-col w-full max-w-sm p-4 overflow-y-auto border-l border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="font-light text-slate-900">Membros</h2>
      </div>

      <ul className="flex flex-col gap-px">
        <li>
          <LoadingChatMember />
        </li>
        <li>
          <LoadingChatMember />
        </li>
        <li>
          <LoadingChatMember />
        </li>
      </ul>
    </div>
  );
};
