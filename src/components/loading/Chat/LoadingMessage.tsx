import { MessageLine } from './MessageLine';

export const LoadingMessage = ({ isSender }: { isSender: boolean }) => {
  return (
    <div className={`flex gap-2 px-8 ${isSender ? 'flex-row-reverse' : ''}`}>
      <div className="w-10 h-10 rounded-lg bg-slate-200 animate-pulse" />

      <div
        className={`w-4/5 flex flex-col gap-2 py-4 px-8 rounded-2xl bg-${
          isSender ? 'sky-500/10' : 'slate-300/20'
        }`}
      >
        <MessageLine />
        <MessageLine />
        <MessageLine />
      </div>
    </div>
  );
};
