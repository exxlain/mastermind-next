import Link from 'next/link';
import { Routes } from '@routes';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 min-w-96">
      <div className="mt-16 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-10 rounded-lg px-6 py-10 md:px-20">
          <h1 className={`text-3xl sm:text-5xl md:leading-normal`}>
            <strong>Welcome to Mastermind game</strong>
          </h1>
          <section className="flex">
            <Link
              href={Routes.LOGIN}
              className="flex items-centergap-5 self-start rounded-lg bg-dark-red px-6 py-3 font-medium text-muted-gold transition-colors hover:bg-bright-red text-2xl sm:text-3xl "
            >
              <span>Sign in</span>
            </Link>
            <Link
              href={Routes.SIGNUP}
              className="flex items-center mx-4 gap-5 self-start rounded-lg bg-dark-red px-6 py-3 font-medium text-muted-gold transition-colors hover:bg-bright-red text-2xl sm:text-3xl "
            >
              <span>Sign up</span>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
