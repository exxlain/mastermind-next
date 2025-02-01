import Scores from './../../Scores'
import {verifySession} from '@/app/lib/session'
import {redirect} from "next/navigation";
import {Routes} from "@routes";
import {fetchScores} from "@/app/lib/data";
import {scoresParams} from "@/app/lib/constants"

export const revalidate = 0;

interface PageProps {
  params: { page: string };
  searchParams?: { elementNumber?: string };
}

export default async function Page({params, searchParams}: PageProps) {
  const session = await verifySession();

  const page = parseInt(params.page, 10) || scoresParams.defaultPage;

  const elementNumber = searchParams?.elementNumber
    ? parseInt(searchParams.elementNumber, 10)
    : scoresParams.elementsDefaultValue;



  const { scores, total } = await fetchScores(page, elementNumber);


  if (session) {
    const currentUserId = session.userId;
    if (typeof currentUserId === 'string') {
      return <Scores scores={scores} total={total} currentUserId={currentUserId}/>;
    }
  }

  redirect(Routes.LOGIN);
}
