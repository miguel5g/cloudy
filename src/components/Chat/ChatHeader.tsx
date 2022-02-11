interface ChatHeaderProps {
  name: string;
}

export const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <header className="px-8 py-4 border-b border-gray-200">
      <h2 className="text-2xl font-light text-slate-900">{name}</h2>
    </header>
  );
};
