import { sql } from '@vercel/postgres';
import {
  Score,
} from './definitions';


export async function fetchScores() {
  try {
    const data = await sql<Score>`
      SELECT
        id,
        date,
        iterations,
        used_time,
      FROM scores
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY scores.date DESC
    `;

    const scores = data.rows;
    return scores;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all scores.');
  }
}
