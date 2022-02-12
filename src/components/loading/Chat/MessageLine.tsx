export const MessageLine = () => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: Math.ceil(Math.random() * 3) }).map((_, index) => (
        <div key={index.toString()} className="w-full h-4 rounded-lg bg-slate-200 animate-pulse" />
      ))}
    </div>
  );
};
