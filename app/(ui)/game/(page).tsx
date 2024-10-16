'use client';
import React, {useEffect, useState} from 'react';
import { nanoid } from 'nanoid';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import { AppDispatch } from '@/app/lib/redux/store';
import {
  pushColorToCurrentPuzzle,
  saveResult,
  clearSelectedPlace,
  getVictory,
  currentSequence,
  sequences,
  results,
  resetResults,
  victory,
  puzzleSequence,
  startGame,
  isGameStarted,
} from '@/app/lib/redux/gamePageSlice';
import { puzzleItemsVariants } from '@/app/lib/constants';
import generatePuzzle from '@/app/helpers/generatePuzzle';
import { Routes } from '@routes';
import findEmptyElementIndex from '@/app/helpers/findEmptyElementIndex';
import ColorBoxesSelectedList from '@/app/components/ColorBoxesSelectedList';
import ColorBoxesResultList from '@/app/components/ColorBoxesResultList';
import ColorBoxesButtonsList from '@/app/components/ColorBoxesButtonsList';
import Fireworks from '@/app/components/Fireworks/Fireworks';
import Info from '@/app/components/Info';
import styles from './GamePage.module.css';
import Link from 'next/link';
import {logout, saveGameResult} from "@/app/lib/actions";
import convertTimeForScreen from "@/app/helpers/convertTimeForScreen"

interface GameProps {
  userId: string;
}
function Game({ userId }: GameProps) {
  const dispatch: AppDispatch = useAppDispatch();
  const puzzleFromGame = useAppSelector(puzzleSequence);
  const currentSequenceSelection = useAppSelector(currentSequence);
  const currentSequences = useAppSelector(sequences);
  const currentResults = useAppSelector(results);
  const victoryState = useAppSelector(victory);
  const isStarted = useAppSelector(isGameStarted);
  const [iterations, setIterations] = useState(0);
  const [time, setTime] = useState(0);


  useEffect(()=>{
    if(!victoryState && isStarted) {
      const timeIntervId: ReturnType<typeof setInterval> = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
      return () => {
        clearInterval(timeIntervId)
      }
    }
  },)

  const onCheckButtonClick =async ()=>{
    setIterations(iterations+1)
    dispatch(saveResult(puzzleFromGame));
    if (currentSequenceSelection.join() === puzzleFromGame.join()) {
      dispatch(getVictory());
      try {
        const currentIterations = iterations + 1
        if(userId){
          await saveGameResult({ iterations: currentIterations, used_time: time, user_id: userId });
          console.log('Score saved successfully');
        }
      } catch (error) {
        console.error('Error saving score:', error);
      }
    }
  };
  const onRestartButtonClick = ()=>{
    dispatch(resetResults());
    setIterations(0)
    const puzzleSequence = generatePuzzle();
    dispatch(startGame(puzzleSequence));
    setTime(0)
  };

  return (
    <main>
      <h1 className='sr-only entry-title'>Game Page</h1>
      {victoryState && <Fireworks/>}
      <div className={styles.page}>
        <header className={styles.header}>
          <button
            className={styles.headerButton}
            aria-label="Start"
            onClick={onRestartButtonClick}
          >
            {isStarted ? 'restart' : 'start'}
          </button>
          <div className={styles.scoresWrapper}>
            <div className={styles.scoresItem}>iterations: {iterations}</div>
            <div className={styles.scoresItem}>time: {convertTimeForScreen(time)}</div>
          </div>
          <Link
            href={Routes.SCORE}
            className={styles.headerButton}
            aria-label="Go to score page"
          >
            scores
          </Link>
          <button
            className={styles.headerButton}
            aria-label="Logout"
            onClick={async () => {
              await logout();
              dispatch(resetResults());
            }}
          >
            logout
          </button>
        </header>
        <section className={styles.selectVariantsWrapper}>
          {<ColorBoxesButtonsList colors={puzzleItemsVariants} selectColor={pushColorToCurrentPuzzle} isVictory={victoryState}/>}
          {<ColorBoxesSelectedList colors={currentSequenceSelection} clearSelectedPlace={clearSelectedPlace}/>}
        </section>
        <section className={styles.checkInfoWrapper}>
          <button
            className={styles.checkButton}
            aria-label="Check your sequence"
            onClick={onCheckButtonClick}
            disabled={findEmptyElementIndex(currentSequenceSelection) !== -1}
          >
          Check
          </button>
          <Info/>
        </section>
        <section className={styles.results}>
          <p className={styles.resultsText}>Your results:</p>
          {currentSequences?.map((sequence: Array<string>, index: number)=>(<ColorBoxesResultList colors={sequence} results={currentResults[index]} key={nanoid()}/>))}
        </section>
      </div>
    </main>
  );
}

export default Game
