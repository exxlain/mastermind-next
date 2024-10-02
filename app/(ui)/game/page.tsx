import Game from './(page)'
import {verifySession} from '@/app/lib/session'
import {redirect} from "next/navigation";
import {Routes} from "@routes";

export default async function Page() {
  const session = await verifySession();

  if (session) {
    const currentUserId = session.userId;

    if (typeof currentUserId === 'string') {
      return <Game userId={currentUserId} />;
    }
  }

  redirect(Routes.LOGIN);
}
