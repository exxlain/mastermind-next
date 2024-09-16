import Link from 'next/link';

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
            <p className={`text-xl md:text-3xl md:leading-normal`}>
              <strong>Welcome to Mastermind game</strong>
            </p>
            <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-dark-red px-6 py-3 text-lg font-medium text-muted-gold transition-colors hover:bg-bright-gold md:text-xl"
            >
              <span>Sign in</span>
            </Link>
          </div>
        </div>
      </main>
  );
}
