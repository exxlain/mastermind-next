import Scores from './Scores'
import {verifySession} from '@/app/lib/session'
import {redirect} from "next/navigation";
import {Routes} from "@routes";
import {fetchScores} from "@/app/lib/data";

export const revalidate = 0;


export default async function Page() {
  const session = await verifySession();

  const { scores, total } = await fetchScores(1, 18);


  if (session) {
    const currentUserId = session.userId;
    if (typeof currentUserId === 'string') {
      return <Scores scores={scores} total={total} currentUserId={currentUserId}/>;
    }
  }

  redirect(Routes.LOGIN);
}
