import Link from 'next/link';
import { Routes } from '@routes';

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-16 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-10 rounded-lg px-6 py-10 md:px-20">
            <p className={`text-3xl sm:text-5xl md:leading-normal`}>
              <strong>Welcome to Mastermind game</strong>
            </p>
            <Link
                href={Routes.LOGIN}
                className="flex items-center gap-5 self-start rounded-lg bg-dark-red px-6 py-3 font-medium text-muted-gold transition-colors hover:bg-bright-gold text-2xl sm:text-3xl"
            >
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </main>
  );
}
