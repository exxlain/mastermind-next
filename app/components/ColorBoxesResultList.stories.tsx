import React from 'react';
import ColorBoxesResultList from './ColorBoxesResultList';
import { BoxColor } from '@/app/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'ColorBoxesResultList',
  component: ColorBoxesResultList,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '650px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    colors: Array,
    results: Array,
  },
} satisfies Meta<typeof ColorBoxesResultList>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Mixed: Story = {
  args: {
    colors: [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.WHITE],
    results: [2, 1, 0, 0, 0],
  },
};

export const ALWrong: Story = {
  args: {
    colors: [BoxColor.BLUE, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.WHITE],
    results: [0, 0, 0, 0, 0],
  },
};

export const AllRight: Story = {
  args: {
    colors: [BoxColor.BROWN, BoxColor.GREEN, BoxColor.GREEN, BoxColor.GOLD, BoxColor.GREEN],
    results: [2, 2, 2, 2, 2],
  },
};
