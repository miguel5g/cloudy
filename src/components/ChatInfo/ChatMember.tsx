import { FiMessageSquare } from 'react-icons/fi';
import { User } from '../../typings';

interface ChatMemberProps {
  member: User;
}

export const ChatMember = ({ member }: ChatMemberProps) => {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <img className="w-12 h-12 rounded-lg" src={member.avatarUrl} alt="Chat member avatar" />

      <div className="flex flex-col flex-1">
        <h3 className="font-medium text-slate-700">{member.name}</h3>
        <span className="-mt-1 text-sm font-light text-slate-500">
          {/* TODO: Implement a member status */}
        </span>
      </div>

      <button className="flex items-center justify-center p-3 transition rounded-lg bg-sky-500/10 hover:bg-sky-700/10">
        <FiMessageSquare className="text-sky-500" />
      </button>
    </div>
  );
};
