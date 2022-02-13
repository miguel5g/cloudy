import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import accessAccountSVG from '../../assets/svg/access-account.svg';

import { TextInputGroup } from '../../components/TextInputGroup';

export const SignIn = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex min-h-screen">
      <section className="flex flex-col items-center justify-center flex-1 shadow-xl bg-gradient-to-br from-sky-300/80 to-sky-500/90">
        <img className="max-w-sm" src={accessAccountSVG} alt="Account sign in" />
        <h1 className="mt-8 text-4xl font-black text-white">Crie sua conta na Cloudy</h1>
        <p className="font-light text-white">
          Uma aplicação para troca de mensagens instantâneas em grupos.
        </p>
      </section>

      <section className="flex items-center justify-center flex-1">
        <main className="flex flex-col flex-1 max-w-lg p-8">
          {/* TODO: Add app logo */}

          <h2 className="text-4xl font-extrabold text-slate-900">Acessar conta</h2>
          <p className="font-light text-slate-400">
            Não tem uma conta?{' '}
            <Link className="underline text-sky-500" to="/signup">
              Criar conta
            </Link>
          </p>

          <form className="mt-16" onSubmit={handleSubmit}>
            <TextInputGroup label="E-mail" icon={FiMail} type="email" placeholder="seu@email.com" />

            <TextInputGroup
              className="mt-4"
              label="Senha"
              icon={FiLock}
              type="password"
              placeholder="Sua senha"
            />

            <button
              className="flex items-center justify-center w-full px-16 py-4 mt-8 text-white transition rounded-lg shadow-lg bg-sky-500 hover:bg-sky-600 shadow-sky-500/10 hover:shadow-sky-500/20"
              type="submit"
            >
              Acessar
            </button>
          </form>
        </main>
      </section>
    </div>
  );
};
