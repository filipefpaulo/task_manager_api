import { ITask } from '../entities/ITask';
import { TaskRepository } from '../db/repositories/TaskRepository';

export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  async getAllTasks(): Promise<ITask[]> {
    const tasks = await this.taskRepository.getAllTasks();

    return tasks;
  }

  async createTask(data: ITask): Promise<ITask> {
    const tasks = await this.taskRepository.createTask(data);

    return tasks;
  }
}
