import clsx from 'clsx';
import {fetchScores} from "@/app/lib/data";

export default async function Scores() {
  const scores = await fetchScores();

  const formatDate=(date: string)=>{
    const fullDate= new Date(date);
    return fullDate.toISOString().split('T')[0];
  }
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className= "mb-4 text-xl md:text-2xl">
                Scores
      </h2>
      <div className="w-full md:w-7/10 flex flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
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
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {score.user_id}
                    </p>
                  </div>
                </div>
                <p
                  className="truncate text-sm font-medium md:text-base"
                >
                  {score.used_time}
                </p>
                <p
                  className="truncate text-sm font-medium md:text-base"
                >
                  {score.iterations}
                </p>
                <p
                  className="truncate text-sm font-medium md:text-base"
                >
                  {formatDate(score.date)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
