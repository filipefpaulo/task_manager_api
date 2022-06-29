export interface ITask {
  id?: string;
  username?: string;
  task: string;
  done?: boolean;
  createdAt?: Date;
}
