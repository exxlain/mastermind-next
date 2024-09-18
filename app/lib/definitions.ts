export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Score = {
  date: string;
  id: string;
  iterations: number;
  used_time: number;
  user_id: string,
};
