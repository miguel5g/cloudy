import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import accessAccountSVG from '../../assets/svg/access-account.svg';

import { TextInputGroup } from '../../components/TextInputGroup';

export const SignUp = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-row-reverse min-h-screen">
      <section className="flex flex-col items-center justify-center flex-1 shadow-xl bg-gradient-to-bl from-sky-300/80 to-sky-500/90">
        <img className="max-w-sm" src={accessAccountSVG} alt="Account sign in" />
        <h1 className="mt-8 text-4xl font-black text-white">Crie sua conta na Cloudy</h1>
        <p className="font-light text-white">
          Uma aplicação para troca de mensagens instantâneas em grupos.
        </p>
      </section>

      <section className="flex items-center justify-center flex-1">
        <main className="flex flex-col flex-1 max-w-lg p-8">
          {/* TODO: Add app logo */}

          <h2 className="text-4xl font-extrabold text-slate-900">Criar conta</h2>
          <p className="font-light text-slate-400">
            Já tem uma conta?{' '}
            <Link className="underline text-sky-500" to="/signin">
              Acessar conta
            </Link>
          </p>

          <form className="mt-16" onSubmit={handleSubmit}>
            <TextInputGroup
              label="Usuário"
              icon={FiUser}
              type="text"
              placeholder="Seu nome de usuário"
            />

            <TextInputGroup
              className="mt-4"
              label="E-mail"
              icon={FiMail}
              type="email"
              placeholder="seu@email.com"
            />

            <TextInputGroup
              className="mt-4"
              label="Senha"
              icon={FiLock}
              type="password"
              placeholder="Uma senha nova forte"
            />

            <TextInputGroup
              className="mt-4"
              label="Repetir senha"
              icon={FiLock}
              type="password"
              placeholder="Repita a senha"
            />

            <button
              className="flex items-center justify-center w-full px-16 py-4 mt-8 text-white transition rounded-lg shadow-lg bg-sky-500 hover:bg-sky-600 shadow-sky-500/10 hover:shadow-sky-500/20"
              type="submit"
            >
              Criar Conta
            </button>
          </form>
        </main>
      </section>
    </div>
  );
};
