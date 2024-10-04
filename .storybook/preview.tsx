import type { Preview } from "@storybook/react";
import {Provider} from "react-redux";
import { makeStore } from '@/app/lib/redux/store'

import '@/app/globals.css';

const store = makeStore()
const preview: Preview = {
      decorators: [
        (Story) => (
            <Provider store={store}>
              <Story />
            </Provider>
         ),
      ],
      parameters: {
        controls: {
          matchers: {
            color: /(background|color)$/i,
             date: /Date$/i,
          },
        },
      },
   };


export default preview;
