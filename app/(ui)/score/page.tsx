import Scores from './(page)'
import {verifySession} from '@/app/lib/session'
import {redirect} from "next/navigation";
import {Routes} from "@routes";
import {fetchScores} from "@/app/lib/data";

export const revalidate = 0;

export default async function Page() {
  const session = await verifySession();
  const scores = await fetchScores();

  if (session) {
    const currentUserId = session.userId;
    if (typeof currentUserId === 'string') {
      return <Scores scores={scores} currentUserId={currentUserId}/>;
    }
  }

  redirect(Routes.LOGIN);
}
