import prisma from '@/lib/prisma';


export async function fetchScores(page = 1, limit = 20) {
  try {
    const skip = (page - 1) * limit;

    const total = await prisma.scores.count();

    const scores = await prisma.scores.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        date: true,
        iterations: true,
        used_time: true,
        user: {
          select: {
            name: true,
            id: true,
          },
        },
      },
      orderBy: {
        date: 'desc',
      },
    })
    return {
      total,
      scores,
    }
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all scores.');
  };
}
