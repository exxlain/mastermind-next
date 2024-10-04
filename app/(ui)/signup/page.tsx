import SIgnUpForm from '@/app/components/SignupForm';
import {Metadata} from "next";
import {SrcLinks} from '@routes';
import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full  min-w-[350px] max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full p-3 md:h-36 justify-center">
          <div className="">
            <Image
              src={SrcLinks.BULL}
              width={100}
              height={100}
              alt="logo"
              className="size-16 md:size-24"
              priority
            />
          </div>
        </div>
        <SIgnUpForm />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Signup',
};

