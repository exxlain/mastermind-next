import prisma from '@/lib/prisma';


export async function fetchScores() {
  try {
    return await prisma.scores.findMany({
      select: {
        id: true,
        date: true,
        iterations: true,
        used_time: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    })
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all scores.');
  };
}
