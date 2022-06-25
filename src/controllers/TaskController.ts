import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

export class TaskController {
  constructor(private taskService: TaskService) {}

  getAllTasks = async (_req: Request, res: Response): Promise<Response> => {
    const tasks = await this.taskService.getAllTasks();

    return res.status(200).json(tasks);
  };

  createTask = async (req: Request, res: Response): Promise<Response> => {
    const { username, task } = req.body;

    const createdTask = await this.taskService.createTask({ username, task });

    return res.status(200).json(createdTask);
  };
}
