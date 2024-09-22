import {sql} from '@vercel/postgres';
import {Score} from './definitions';


export async function fetchScores() {
  try {
    const data = await sql<Score>`
      SELECT
        scores.id,
        scores.date,
        scores.iterations,
        scores.used_time,
        users.name AS user_name
      FROM scores
      JOIN users ON scores.user_id = users.id
      ORDER BY scores.date DESC
    `;
    return data.rows;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all scores.');
  }
}
