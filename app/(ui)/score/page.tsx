import clsx from 'clsx';
//import {fetchScores} from "@/app/lib/data";
import {scores} from '@/app/lib/placeholder-data'

export default async function Scores() {
  // const scores = await fetchScores();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className= "mb-4 text-xl md:text-2xl">
                Scores
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {scores.map((score, i) => {
            return (
              <div
                key={score.user_id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {score.used_time}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {score.iterations}
                    </p>
                  </div>
                </div>
                <p
                  className="truncate text-sm font-medium md:text-base"
                >
                  {score.used_time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
