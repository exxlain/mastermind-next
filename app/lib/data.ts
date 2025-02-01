import prisma from '@/lib/prisma';


export async function fetchScores(page = 1, limit = 20) {
  if (page < 1) throw new Error('Page must be greater than 0');
  if (limit < 1 || limit > 100) throw new Error('Limit must be between 1 and 100');
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
