export interface IEmployee {
  _id: number;
  image: string;
  name: string;
  secondName: string;
  role: IRole;
  birth: string;
  salary: boolean;
}

export interface IEditEmployee {
  name: string;
  image: string;
  secondName: string;
  role: string;
  birth: string;
  salary: boolean;
}

export interface IRole {
  description: string;
}

export interface IRootState {
  user: IUser;
}

export interface IUser {
  users: IEmployee[];
  loading: boolean;
}