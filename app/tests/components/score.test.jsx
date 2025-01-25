import Score from "app/(ui)/score/(page).tsx";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const scores = [
  {
    date: '2022-11-14',
    iterations: 4,
    used_time: 200,
    user: {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Username'
    },
    id: '1',
  },
  {
    date: '2022-11-13',
    iterations: 8,
    used_time: 600,
    user: {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Username'
    },
    id: '2',
  },
  {
    date: '2022-11-13',
    iterations: 8,
    used_time: 600,
    user: {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Username'
    },
    id: '3',
  }
];

test('displays Scores screen', async () => {
  render(<Score url="/score" scores={scores} currentUserId={'410544b2-4001-4271-9855-fec4b6a6442a'} />)

  expect(screen.getByRole('link')).toHaveTextContent('back to game')
  expect(screen.getByText('Scores')).toBeInTheDocument();
  expect(screen.getByLabelText('All users')).toBeChecked();
  expect(screen.getByRole('table')).toBeInTheDocument();
})

test('filters scores by current user', async () => {
  render(<Score scores={scores} currentUserId="410544b2-4001-4271-9855-fec4b6a6442a" />);

  const radioButton = screen.getByLabelText('Only me');
  await userEvent.click(radioButton);
  expect(screen.getByLabelText('Only me')).toBeChecked();
  const filteredScores = scores.filter(score => score.user.id === '410544b2-4001-4271-9855-fec4b6a6442a');
  expect(screen.getAllByRole('row')).toHaveLength(filteredScores.length + 1);
});

test('handles missing or undefined scores gracefully', () => {
  render(<Score scores={undefined} currentUserId="12345" />);

  expect(screen.queryByRole('table')).not.toBeInTheDocument();

  expect(screen.getByText('No scores available')).toBeInTheDocument();
});


test('loading time Scores screen', async () => {
  jest.resetModules()
  const start = performance.now();
  render(<Score url="/score" scores={scores} currentUserId={'410544b2-4001-4271-9855-fec4b6a6442a'} />)
  const end = performance.now();
  const renderTime = end - start
  console.log(`Component rendered in ${renderTime}ms`);

  expect(renderTime).toBeLessThanOrEqual(100);

})
