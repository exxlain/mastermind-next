import Score from "app/(ui)/score/Scores";
import {render, screen} from '@testing-library/react'
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
const total = 10

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useParams: () => ({
    page: '1',
  }),
}));

beforeEach(() => {
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    value: 800,
  });
});


describe('scores screen', ()=>{
  test('displays Scores screen', async () => {
    render(<Score total={total} scores={scores}/>)

    expect(screen.getByRole('link', { name: /back to game/i })).toBeInTheDocument();
    expect(screen.getByText('Scores')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  })

  test('handles missing or undefined scores gracefully', () => {
    render(<Score total={total} scores={undefined}/>);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();

    expect(screen.getByText('No scores available')).toBeInTheDocument();
  });


  test('loading time Scores screen', async () => {
    const start = performance.now();
    render(<Score total={total} scores={scores}/>)
    const end = performance.now();
    const renderTime = end - start
    console.log(`Component rendered in ${renderTime}ms`);

    expect(renderTime).toBeLessThanOrEqual(50);
  })

})
