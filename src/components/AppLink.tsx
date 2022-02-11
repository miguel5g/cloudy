import { Link } from 'react-router-dom';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const AppLink: React.FC<AppLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link
      to={href}
      className="flex items-center justify-center p-3 transition rounded-lg bg-sky-500/10 hover:bg-sky-700/10"
      {...props}
    >
      <span className="text-xl text-sky-500">{children}</span>
    </Link>
  );
};
