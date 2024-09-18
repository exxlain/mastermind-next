/*
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Provider} from "react-redux";
import {store} from "../../app/store";
import ColorBoxesButtonsList from './ColorBoxesButtonsList';
import { pushColorToCurrentPuzzle } from '../GamePage/gamePageSlice';
import { BoxColor } from '../../app/lib/constants';

export default {
  title: 'ColorBoxesButtonsList',
  component: ColorBoxesButtonsList,
  decorators: [
    (Story) => (
        <Provider store={store}>
          <div style={{ maxWidth: '650px' }}>
            <Story />
          </div>
        </Provider>
    ),
  ],
  argTypes: {
    colors: Array,
    results: Array,
  },
} as ComponentMeta<typeof ColorBoxesButtonsList>;

const Template: ComponentStory<typeof ColorBoxesButtonsList> = (args) => <ColorBoxesButtonsList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colors: [BoxColor.BROWN, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GOLD, BoxColor.WHITE],
  selectColor: pushColorToCurrentPuzzle,
};

export const ALWrong = Template.bind({});
ALWrong.args = {
  colors: [BoxColor.BLUE, BoxColor.BLUE, BoxColor.GREEN, BoxColor.GREEN, BoxColor.WHITE],
  selectColor: pushColorToCurrentPuzzle,
};

export const AllRight = Template.bind({});
AllRight.args = {
  colors: [BoxColor.BROWN, BoxColor.GREEN, BoxColor.GREEN, BoxColor.GOLD, BoxColor.GREEN],
  selectColor: pushColorToCurrentPuzzle,
};
*/
