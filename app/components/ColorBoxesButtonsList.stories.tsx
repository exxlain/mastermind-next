import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ColorBoxesButtonsList from './ColorBoxesButtonsList';
import { pushColorToCurrentPuzzle } from '@/app/lib/redux/gamePageSlice';
import { BoxColor } from '@/app/lib/constants';
import {boolean} from "zod";

const meta = {
  title: 'ColorBoxesButtonsList',
  component: ColorBoxesButtonsList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '650px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    colors: Array,
    selectColor: ()=>{},
    isVictory: boolean,
  },
} satisfies Meta<typeof ColorBoxesButtonsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneColor: Story = {
  args: {
    colors: [BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN, BoxColor.BROWN],
    selectColor: pushColorToCurrentPuzzle,
    isVictory: false,
  },
};

export const DifferentColors: Story = {
  args: {
    colors: [BoxColor.BLUE, BoxColor.BROWN, BoxColor.GOLD, BoxColor.GREEN, BoxColor.WHITE],
    selectColor: pushColorToCurrentPuzzle,
    isVictory: false,
  },
};
