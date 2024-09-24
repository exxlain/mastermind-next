import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { puzzleItemsCleared, emptyElement } from '@/app/lib/constants';
import type { RootState } from '@/app/lib/redux/store';
import checkResult from '@/app/helpers/checkResult';
import findEmptyElementIndex from '@/app/helpers/findEmptyElementIndex';


export interface GamePageState {
  currentSequence: Array<string>;
  sequences: Array<Array<string>>;
  results: Array<Array<number>>;
  victory: boolean;
  isGameStarted: boolean;
  puzzleSequence: Array<string>;
}

const initialState: GamePageState = {
  currentSequence: puzzleItemsCleared,
  sequences: [],
  results: [],
  victory: false,
  isGameStarted: false,
  puzzleSequence: [],
};

const gamePageSlice = createSlice({
  name: 'gamePage',
  initialState,
  reducers: {
    startGame: (state,  action: PayloadAction<Array<string>>)=>{
      state.isGameStarted = true;
      state.puzzleSequence = action.payload;
    },
    pushColorToCurrentPuzzle(state, action: PayloadAction<string>){
      const emptyIndex = findEmptyElementIndex(state.currentSequence);
      state.currentSequence[emptyIndex] = action.payload;
    },
    clearSelectedPlace(state, action: PayloadAction<number>){
      state.currentSequence[action.payload] = emptyElement;
    },
    saveResult(state, action: PayloadAction<Array<string>>){
      state.sequences.unshift(state.currentSequence);
      const result = checkResult(action.payload, state.currentSequence);
      state.results.unshift(result);
      state.currentSequence = puzzleItemsCleared;
    },
    resetResults: ()=>{
      return initialState;
    },
    getVictory: (state)=>{
      state.victory = true;
      state.isGameStarted = false;
    },
  },
});

export const currentSequence = (state: RootState) => state.currentSequence;
export const sequences = (state: RootState) => state.sequences;
export const results = (state: RootState) => state.results;
export const victory = (state: RootState) => state.victory;
export const  puzzleSequence = (state: RootState) => state.puzzleSequence;
export const  isGameStarted = (state: RootState) => state.isGameStarted;


export const {
  pushColorToCurrentPuzzle,
  clearSelectedPlace,
  saveResult,
  resetResults,
  getVictory,
  startGame,
} = gamePageSlice.actions;

export default gamePageSlice.reducer;
