'use client'
import { useState } from 'react';
import {Routes} from "@routes";
import convertTimeForScreen from "@/app/helpers/convertTimeForScreen";
import { ScoreForScreen} from "@/app/lib/definitions";
import formatDate from "@/app/helpers/formatDate";
import DarkButton from "@/app/components/Buttons/DarkButton/DarkButton";

const filterScores = (scores: Array<ScoreForScreen>, currentUserId: string): Array<ScoreForScreen>=>{
  return scores.filter(score=>score.user.id===currentUserId)
}
interface ScoresPops {
  scores: Array<ScoreForScreen>;
  currentUserId: string;
}

function Scores({scores, currentUserId}: ScoresPops) {
  const [allUsersFiltering, setAllUsersFiltering] = useState<'allUsers' | 'onlyMe'>('allUsers')

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>)=>{
    setAllUsersFiltering(evt.target.value  as 'allUsers' | 'onlyMe')
  }

  const filteredScores = allUsersFiltering ==='allUsers' ? scores : filterScores(scores, currentUserId)
  return (
    <div className="flex fle w-full flex-col md:col-span-4">
      <section className='flex items-center w-full sm:w-7/12 md:w-7/12 lg:w-1/2 xl:w-1/2 mx-auto px-3'>
        <h2 className="text-3xl pr-6">Scores</h2>
        <fieldset className="text-ml flex-grow">
          <div className='my-5'>
            <input onChange={handleChange} className='mr-2' id='all users' type="radio" name='filter' value={'allUsers'} checked={allUsersFiltering==='allUsers'}/>
            <label htmlFor='all users'>All users</label>
          </div>
          <div className='my-5'>
            <input onChange={handleChange} className='mr-2' id='only me' type="radio" name='filter' value={'onlyMe'} checked={allUsersFiltering==='onlyMe'}/>
            <label htmlFor='only me'>Only me</label>
          </div>
        </fieldset>
        <div className='my-5'>
          <DarkButton route={Routes.GAME} title={'back to game'} px={3} py={2}/>
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
            {filteredScores.map((score) => {
              return (
                <tr
                  key={score.id}
                >
                  <td className="golden-border text-muted-gold p-2">{score.user.name}</td>
                  <td className="golden-border text-muted-gold p-2">{convertTimeForScreen(score.used_time)}</td>
                  <td className="golden-border text-muted-gold p-2">{score.iterations}</td>
                  <td className="golden-border text-muted-gold p-2">{formatDate(score.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Scores
