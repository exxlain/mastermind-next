'use client';
import React, {useEffect} from 'react';
import { nanoid } from 'nanoid';
//import { useNavigate } from 'react-router-dom';
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
  resetPuzzle,
  startGame,
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
import {signOutAction} from "@/app/lib/actions";


export default function Page() {
  const dispatch: AppDispatch = useAppDispatch();
  const puzzleFromGame = useAppSelector(puzzleSequence);
  const currentSequenceSelection = useAppSelector(currentSequence);
  const currentSequences = useAppSelector(sequences);
  const currentResults = useAppSelector(results);
  const victoryState = useAppSelector(victory);

  useEffect(()=>{
      const puzzleSequence = generatePuzzle();
      dispatch(startGame(puzzleSequence));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCheckButtonClick = ()=>{
    dispatch(saveResult(puzzleFromGame));
    if (currentSequenceSelection.join() === puzzleFromGame.join()){
      dispatch(getVictory());
      //save score to db
    }
  };
  const onRestartButtonClick = ()=>{
    dispatch(resetResults());
    const puzzleSequence = generatePuzzle();
    dispatch(startGame(puzzleSequence));
  };

  return (
    <>
      {victoryState && <Fireworks/>}
      <div className={styles.page}>
        <header className={styles.header}>
          <button
              className={styles.headerButton}
              aria-label="Logout"
              onClick={async () => {
                await signOutAction();
                dispatch(resetResults());
                dispatch(resetPuzzle());
              }}
          >
            Logout
          </button>
          <Link
              href={Routes.SCORE}
              className={styles.headerButton}
              aria-label="Go to score page"
          >
            Scores
          </Link>
          <button
            className={styles.headerButton}
            aria-label="Try again"
            onClick={onRestartButtonClick}
          >
            Restart
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
     </>
  );
}
