import clsx from 'clsx';
import {fetchScores} from "@/app/lib/data";
import formatDate from '@/app/helpers/formatDate'
import Link from "next/link";
import {Routes} from "@routes";

export const revalidate = 0

export default async function Scores() {
  const scores = await fetchScores();
  const tableElement = (info: string | number, width: string)=>{
    return (
      <div className={`flex items-center justify-center w-${width}`}>
        <p className="truncate text-sm font-semibold md:text-base">
          {info}
        </p>
      </div>
    )
  }

  return (
    <div className="py-6 flex fle w-full flex-col md:col-span-4">
      <h2 className= "text-center text-3xl md:text-2xl">
            Scores
      </h2>
      <div className="w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto flex rounded-xl py-2">
        <Link
          href={Routes.GAME}
          className="flex items-center gap-5 self-start rounded-lg bg-dark-red px-3 py-3 font-medium text-muted-gold transition-colors hover:bg-bright-red text-xl sm:text-2xl "
        >
          <span>back to game</span>
        </Link>

      </div>
      <div className="w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto flex flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          <div
            className={'flex flex-row items-center justify-between py-4border-t py-3 text-dark-red'}
          >
            {tableElement('User name', '1/5')}
            {tableElement('Time', '1/5')}
            {tableElement('Iterations', '1/5')}
            {tableElement('Date', '2/5')}
          </div>
          {scores.map((score, i) => {
            return (
              <div
                key={score.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                {tableElement(score.user.name, '1/5')}
                {tableElement(score.used_time, '1/5')}
                {tableElement(score.iterations, '1/5')}
                {tableElement(formatDate(score.date), '2/5')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
