import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ColorBoxesResultList from './ColorBoxesResultList';
import { BoxColor } from '@/app/lib/constants';

export default {
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
} as ComponentMeta<typeof ColorBoxesResultList>;

const Template: ComponentStory<typeof ColorBoxesResultList> = (args) => <ColorBoxesResultList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colors: [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN,BoxColor.GOLD, BoxColor.WHITE],
  results: [2,1,0,0,0],
};

export const ALWrong = Template.bind({});
ALWrong.args = {
  colors: [BoxColor.BLUE, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.WHITE],
  results: [0,0,0,0,0],
};

export const AllRight = Template.bind({});
AllRight.args = {
  colors: [BoxColor.BROWN, BoxColor.GREEN, BoxColor.GREEN,BoxColor.GOLD, BoxColor.GREEN],
  results: [2,2,2,2,2],
};
