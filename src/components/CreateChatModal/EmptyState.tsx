interface EmptyStateProps {
  label: string;
  src: string;
}

export const EmptyState = ({ label, src }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <img className="w-48 h-48" src={src} alt="Searching" />
      <span className="mt-4 text-xl font-light text-slate-900">{label}</span>
    </div>
  );
};
