import { Request, Response } from 'express';
import { ErrorHandler } from '../helpers/ErrorHandler';
import { TaskService } from '../services/TaskService';

export class TaskController {
  constructor(private taskService: TaskService) {}

  getAllTasks = async (_req: Request, res: Response): Promise<Response> => {
    const tasks = await this.taskService.getAllTasks();

    return res.status(200).json(tasks);
  };

  createTask = async (req: Request, res: Response): Promise<Response> => {
    const { username, task } = req.body;

    if (!username) throw new ErrorHandler('username is required', 401);
    if (!task) throw new ErrorHandler('task is required', 401);

    const createdTask = await this.taskService.createTask({ username, task });

    return res.status(200).json(createdTask);
  };

  updateTask = async (req: Request, res: Response): Promise<Response> => {
    const { task } = req.body;
    const { id } = req.params;

    if (!task) throw new ErrorHandler('task is required', 401);

    const updatedTask = await this.taskService.updateTask({ id, task });

    return res.status(200).json(updatedTask);
  };

  deleteTask = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const deletedTask = await this.taskService.deleteTask(id);

    return res.status(200).json(deletedTask);
  };
}
