import { ITask } from '../../entities/ITask';

export interface ITaskRepository {
  getAllTasks(): Promise<ITask[]>;
  createTask(task: ITask): Promise<ITask>;
  updateTask(task: ITask): Promise<boolean>;
  deleteTask(id: string): Promise<boolean>;
}
