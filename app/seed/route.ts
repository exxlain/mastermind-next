import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { scores, users } from '@/app/lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
   `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
         INSERT INTO users (id, name, email, password)
         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
         ON CONFLICT (id) DO NOTHING;
       `;
    }),
  );

  return insertedUsers;
}


async function seedScores() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
     CREATE TABLE IF NOT EXISTS scores (
       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
       user_id UUID NOT NULL,
       iterations INT NOT NULL,
       used_time INT NOT NULL,
       date DATE NOT NULL
     );
   `;

  await client.sql`
     ALTER TABLE scores
     ADD CONSTRAINT fk_user
     FOREIGN KEY (user_id) REFERENCES users(id)
     ON DELETE CASCADE;
  `;

  const insertedScores = await Promise.all(
    scores.map(
      (score) => client.sql`
         INSERT INTO scores (user_id, iterations, used_time, date)
         VALUES (${score.user_id}, ${score.iterations}, ${score.used_time}, ${score.date})
         ON CONFLICT (id) DO NOTHING;
       `,
    ),
  );
  return insertedScores;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedScores();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}

