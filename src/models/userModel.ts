export interface User {
  _id: string;
  groups: { name: string }[];
  password: string;
}
