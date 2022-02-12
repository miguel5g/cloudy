import choseSVG from '../assets/svg/choose.svg';

export const Instructions = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-8 bg-slate-50">
      <img className="max-w-xs mb-4" src={choseSVG} alt="Chose" />

      <h2 className="text-2xl font-semibold text-slate-900">
        Abra um chat para começar a conversar.
      </h2>
      <p className="text-sm font-light text-slate-600">
        Você pode criar um novo chat ou entrar em um chat existente.
      </p>
    </div>
  );
};
