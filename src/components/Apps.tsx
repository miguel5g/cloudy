import { FiMessageSquare } from 'react-icons/fi';

import { AppLink } from './AppLink';

export const Apps = () => {
  return (
    <aside className="flex flex-col justify-center p-8 border-r border-gray-200">
      <nav>
        <AppLink href="/" aria-label="Conversas">
          <FiMessageSquare />
        </AppLink>
      </nav>
    </aside>
  );
};
