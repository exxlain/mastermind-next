import {fetchScores} from "@/app/lib/data";
import Link from "next/link";
import {Routes} from "@routes";
import convertTimeForScreen from "@/app/helpers/convertTimeForScreen";
import DateFormatter from "@/app/components/DateFormatter";

export const revalidate = 0

export default async function Scores() {
  const scores = await fetchScores();

  return (
    <div className="py-6 flex fle w-full flex-col md:col-span-4">
      <section className='flex items-center w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto px-3'>
        <h2 className="text-3xl flex-grow">
              Scores
        </h2>
        <div className='my-5'>
          <Link
            href={Routes.GAME}
          >
            <span className="text-2xl bg-dark-red hover:bg-bright-red  px-[8px] py-[8px] shadow-custom-shadow rounded-md">back to game</span>
          </Link>
        </div>
      </section>
      <section className="w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto overflow-hidden rounded-md">
        <table className="table-auto w-full">
          <thead
            className={'text-dark-red bg-muted-gold'}
          >
            <tr>
              <th className="text-left golden-border p-3">User name</th>
              <th className="text-left golden-border p-3">Time</th>
              <th className="text-left golden-border p-3">Iterations</th>
              <th className="text-left golden-border p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => {
              return (
                <tr
                  key={score.id}
                >
                  <td className="golden-border text-muted-gold p-2">{score.user.name}</td>
                  <td className="golden-border text-muted-gold p-2">{convertTimeForScreen(score.used_time)}</td>
                  <td className="golden-border text-muted-gold p-2">{score.iterations}</td>
                  <td className="golden-border text-muted-gold p-2"><DateFormatter date={score.date} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
