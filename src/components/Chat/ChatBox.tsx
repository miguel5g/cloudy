import { FiSend } from 'react-icons/fi';

export const ChatBox = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full gap-4 px-8 py-4 border-t border-gray-200 bg-slate-50"
    >
      <input
        className="w-full p-2.5 border rounded-lg border-slate-200 outline-none focus:border-slate-400 transition"
        placeholder="Digite sua mensagem..."
        type="text"
      />

      <button
        className="flex items-center justify-center px-4 transition rounded-lg bg-sky-500/10 hover:bg-sky-600/20"
        type="submit"
        aria-label="Enviar mensagem"
      >
        <FiSend className="text-xl text-sky-500" />
      </button>
    </form>
  );
};
