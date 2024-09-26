import {auth} from '@/auth';
import Game from './(page)'
import { redirect } from 'next/navigation';
import {Routes} from "@routes";

export default async function Page() {
  const session = await auth()
  if(!session){
    redirect(Routes.LOGIN)
  }
  return (<Game session={session}/>)
}
