export const LoadingChatLink = () => {
  return (
    <div>
      <div className="flex items-center gap-4 p-4 rounded-lg">
        <div className="w-12 h-12 rounded-lg bg-slate-200 animate-pulse" />

        <div className="flex flex-col flex-1">
          <div className="w-3/5 h-5 rounded-lg bg-slate-200 animate-pulse" />

          <div className="w-4/5 h-4 mt-1 rounded-lg bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
