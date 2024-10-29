import React from 'react';
import DarkButton from './DarkButton';
import type { Meta, StoryObj } from '@storybook/react';
import {Routes} from "@routes";


const meta = {
  title: 'DarkButton',
  component: DarkButton,
  decorators: [
    (Story) => (
      <main className="flex min-h-screen flex-col p-6 min-w-96">
        <section className="flex">
          <Story />
        </section>
      </main>
    ),
  ],
  argTypes: {
    colors: Array,
    results: Array,
  },
} satisfies Meta<typeof DarkButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Small: Story = {
  args: {
    route: Routes.GAME,
    title: 'back to game',
    px: 3,
    py: 2,
  },
};

export const Big: Story = {
  args: {
    route: Routes.LOGIN,
    title: 'Sign in',
    px: 6,
    py: 3,
  },
};
