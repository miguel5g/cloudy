interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
}

export const TextInput = ({ type, ...props }: TextInputProps) => {
  return (
    <input
      className="w-full p-2.5 border rounded-lg border-slate-200 outline-none focus:border-slate-400 transition"
      type={type || 'text'}
      {...props}
    />
  );
};
