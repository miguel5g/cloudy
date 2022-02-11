import { FiMessageSquare } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="flex px-8 py-4 border-b border-gray-200">
      <h1 className="flex items-center gap-2">
        <FiMessageSquare className="text-2xl text-sky-500" strokeWidth={3} />
        <span className="text-2xl font-bold">Messenger</span>
      </h1>

      <div className="ml-auto" />

      <img
        src="https://dummyimage.com/64x64"
        className="object-cover w-12 h-12 rounded-full cursor-pointer"
        alt="Profile"
      />
    </header>
  );
};
