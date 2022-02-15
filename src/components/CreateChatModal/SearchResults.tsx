import { ChatPreview } from '../../typings';

import { ChatPreviewCard } from './ChatPreviewCard';

interface SearchResultsProps {
  results: ChatPreview[];
}

export const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div className="relative mt-8">
      <ul className="hidden-scrollbar flex gap-4 overflow-x-auto w-[calc(100%+4rem)] -translate-x-[2rem] px-8">
        {results.map((chat) => (
          <li key={chat.id}>
            <ChatPreviewCard chat={chat} />
          </li>
        ))}
      </ul>

      <div className="absolute top-0 w-8 h-full bg-gradient-to-r from-white to-transparent -left-[calc(2rem+1px)]" />
      <div className="absolute top-0 w-8 h-full bg-gradient-to-r from-transparent to-white -right-[calc(2rem+1px)]" />
    </div>
  );
};
