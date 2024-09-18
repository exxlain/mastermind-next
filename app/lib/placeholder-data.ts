const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User1',
    email: 'user1@nextmail.com',
    password: '1123456',
  },
  {
    id: '410544b4-4001-4271-9855-fec4b6a6442a',
    name: 'User2',
    email: 'user2@nextmail.com',
    password: '2123456',
  },
];

const scores = [
  {
    date: '2022-11-14',
    iterations: 4,
    used_time: 200,
    user_id: users[0].id,
  },
  {
    date: '2022-11-13',
    iterations: 8,
    used_time: 600,
    user_id: users[1].id,
  }
];


export { users, scores };
