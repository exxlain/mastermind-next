import LoginForm from '@/app/components/login-form';
import {Metadata} from "next";
import {SrcLinks} from '@routes';
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full p-3 md:h-36 justify-center">
                    <div className="">
                        <Image
                            src={SrcLinks.BULL}
                            alt="logo"
                            className="size-16 md:size-24"
                        />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}

export const metadata: Metadata = {
    title: 'Login',
};

