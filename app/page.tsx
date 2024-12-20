import { Routes } from '@routes';
import DarkButton from "@/app/components/Buttons/DarkButton/DarkButton";
import WelcomeAnimation from "@/app/components/WelcomeAnimation/WelcomeAnimation";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 min-w-96">
      <div className="relative">
      </div>
      <div className="mt-16 flex grow flex-col gap-4 md:flex-row">

        <div className="flex flex-col justify-center gap-10 rounded-lg px-6 py-10 md:px-20">
          <WelcomeAnimation/>
          <h1 className={`text-3xl sm:text-5xl md:leading-normal`}>
            <strong>Welcome to Mastermind game</strong>
          </h1>
          <section className="flex">
            <DarkButton route={Routes.LOGIN} title={'Sign in'} px={6} py={3}/>
            <DarkButton route={Routes.SIGNUP} title={'Sign up'} px={6} py={3}/>
          </section>
        </div>
      </div>
    </main>
  );
}
