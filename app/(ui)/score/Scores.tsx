'use client'
import { useLayoutEffect, useRef } from 'react';
import {Routes} from "@routes";
import { useRouter, useParams } from "next/navigation";
import convertTimeForScreen from "@/app/helpers/convertTimeForScreen";
import { ScoreForScreen} from "@/app/lib/definitions";
import formatDate from "@/app/helpers/formatDate";
import DarkButton from "@/app/components/Buttons/DarkButton/DarkButton";
import Link from "next/link";
import {scoresParams} from "@/app/lib/constants";


interface ScoresPops {
  scores: Array<ScoreForScreen>;
  total: number,
}

const ScoresPagination = ({ pagesNumber }: { pagesNumber: number }) => {
  const params = useParams()
  const page = params.page;
  return (
    <nav aria-label="Scores navigation">
      <ul className="flex list-none justify-center" role="navigation">
        {[...Array(pagesNumber)].map((_, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = pageNumber === Number(page);
          return (
            <li key={index}>
              <Link
                href={`/score/page/${pageNumber}`}
                aria-current={isCurrentPage ? 'page' : undefined}
                aria-label={`Page ${pageNumber}`}
                className={`mt-[20px] w-14 h-14 font-medium text-lg shadow-custom-shadow rounded-full flex items-center justify-center ${
                  isCurrentPage
                    ? 'bg-bright-red text-muted-gold'
                    : 'bg-dark-red text-muted-gold hover:bg-bright-red'
                }`}>
                {pageNumber}
              </Link>
            </li>
          )})}
      </ul>
    </nav>
  );
};

const getElementNumber = ()=>{
  const height = window.innerHeight - scoresParams.margin*2
  return Math.floor(height/scoresParams.elementHeight)
}

function Scores({scores, total}: ScoresPops) {
  const router = useRouter();
  const routerRef = useRef(router);

  useLayoutEffect(() => {
    const elements = getElementNumber();
    routerRef.current.replace(`?elementNumber=${elements}`);
  }, []);

  const pagesNumber = Math.ceil(total/getElementNumber());
  const minTableSectionHeight = window.innerHeight - scoresParams.margin*2
  return (
    <main className="flex fle w-full flex-col md:col-span-4">
      <section className='flex justify-between items-center w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto px-3'>
        <h1 className="text-3xl pr-6">Scores</h1>
        {/*       <fieldset className="text-ml flex-grow">
          <div className='my-5'>
            <input onChange={handleChange} className='mr-2' id='all users' type="radio" name='filter' value={'allUsers'} checked={allUsersFiltering==='allUsers'}/>
            <label htmlFor='all users'>All users</label>
          </div>
          <div className='my-5'>
            <input onChange={handleChange} className='mr-2' id='only me' type="radio" name='filter' value={'onlyMe'} checked={allUsersFiltering==='onlyMe'}/>
            <label htmlFor='only me'>Only me</label>
          </div>
        </fieldset>*/}
        <div className='my-5'>
          <DarkButton route={Routes.GAME} title={'back to game'} px={3} py={2}/>
        </div>
      </section>
      <section className={`w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto overflow-hidden rounded-md`}>
        {scores?.length ? (<><div style={{height: minTableSectionHeight}}>
          <table className={'table-auto w-full'}>
            <thead
              className={'text-dark-red bg-bright-gold'}
            >
              <tr>
                <th className="text-left golden-border p-3 ">User name</th>
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
                    <td className="golden-border text-bright-gold p-2">{score.user.name}</td>
                    <td className="golden-border text-bright-gold p-2">{convertTimeForScreen(score.used_time)}</td>
                    <td className="golden-border text-bright-gold p-2">{score.iterations}</td>
                    <td className="golden-border text-bright-gold p-2">{formatDate(score.date)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ScoresPagination pagesNumber={pagesNumber}/>
        </>
        ) : (<h2>No scores available</h2>)}
      </section>
    </main>
  );
}

export default Scores
