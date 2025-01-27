## Mastermind game

- run the development server:

```bash
pnpm dev
```
- open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Used in project
- [Vercel](https://vercel.com/) (link for [deployed build](https://mastermind-next.vercel.app/))
- [Next.js](https://nextjs.org)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux toolkit](https://redux-toolkit.js.org/usage/nextjs)
- [Tailwind](https://tailwindcss.com)
- [github actions CI](https://github.com/features/actions)
- [Prisma ORM](https://www.prisma.io/)
- E2E test ([Playwright](https://playwright.dev/))
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/) (link for: [deployed build](https://670015e350c5cf2da8b33e88-tacnsxwpxw.chromatic.com/))
- [React scan](https://react-scan.com/)

## Mastermind game rules

- Make a Guess
Choose 5 colors in a specific sequence.
Submit your guess to receive feedback.

- Understand the Feedback:
Black Circle: A color is in the correct position and is the correct color.
White Circle: A color is correct, but it's in the wrong position.
No Circle: The color is not in the code.

- Refine Your Guesses
Use the feedback to adjust your next guess.
Keep guessing until you find the correct sequence or run out of attempts.
Win the Game

You win if you guess the exact sequence of colors with all black circles.
