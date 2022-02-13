import { IconType } from 'react-icons';

import { TextInput } from './TextInput';

interface TextInputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  icon?: IconType;
  label: string;
}

export const TextInputGroup = ({ className, label, icon: Icon, ...props }: TextInputGroupProps) => {
  return (
    <label className={['flex flex-col gap-1', className].join(' ')}>
      <span className="flex items-center gap-1 text-slate-600">
        {Icon && <Icon />}
        {label}
      </span>
      <TextInput {...props} />
    </label>
  );
};
