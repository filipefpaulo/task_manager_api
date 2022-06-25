import { PrismaClient } from '@prisma/client';
import { ITask } from '../../entities/ITask';
import { ITaskRepository } from './ITaskRepository';

export class TaskRepository implements ITaskRepository {
  constructor(private prisma: PrismaClient) {}

  async getAllTasks(): Promise<ITask[]> {
    return this.prisma.task.findMany();
  }
  async createTask(task: ITask): Promise<ITask> {
    const createdTask = await this.prisma.task.create({ data: task });

    return createdTask;
  }
  async updateTask(task: ITask): Promise<boolean> {
    const updatedTask = await this.prisma.task.update({
      where: { id: task.id },
      data: task,
    });

    return !!updatedTask;
  }
  async deleteTask(id: string): Promise<boolean> {
    const deletedTask = await this.prisma.task.delete({ where: { id } });

    return !!deletedTask;
  }
}
