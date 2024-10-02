'use client';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import {useFormState} from 'react-dom';
import { login } from '@/app/lib/actions';

export default function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  return (
    <form action={action} className="text-2xl shadow-custom-shadow border border-[1px] border-bright-gold rounded-md">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-2xl font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                autoComplete='off'
                className="bg-background peer block w-full shadow-custom-shadow border border-[1px] border-dark-red rounded-md py-[9px] pl-10 text-lg outline-2  placeholder:text-muted-gold"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-gold peer-focus:text-muted-gold" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-2xl font-medium text-2xl"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                autoComplete='off'
                className="bg-background peer block w-full shadow-custom-shadow border border-[1px] border-dark-red rounded-md py-[9px] pl-10 text-lg outline-2 placeholder:text-muted-gold"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-gold peer-focus:text-muted-gold" />
            </div>
          </div>
        </div>
        <button type='submit' className="bg-dark-red hover:bg-bright-red relative py-[8px] pl-10 pr-6 flex mt-12 w-full shadow-custom-shadow  rounded-md">
          Sign in <ArrowRightIcon className="ml-auto h-5 w-5 absolute right-4 top-1/3" />
        </button>
        <div className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true">
          {state?.message && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{state?.message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
