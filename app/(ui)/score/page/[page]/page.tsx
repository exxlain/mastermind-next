import Scores from './../../Scores'
import {verifySession} from '@/app/lib/session'
import {redirect} from "next/navigation";
import {Routes} from "@routes";
import {fetchScores} from "@/app/lib/data";

export const revalidate = 0;

interface PageProps {
  params: { page: string };
}

export default async function Page({params}: PageProps) {
  const session = await verifySession();

  const page = parseInt(params.page, 10) || 1;
  const { scores, total } = await fetchScores(page, 18);

  if (session) {
    const currentUserId = session.userId;
    if (typeof currentUserId === 'string') {
      return <Scores scores={scores} total={total} currentUserId={currentUserId}/>;
    }
  }

  redirect(Routes.LOGIN);
}
