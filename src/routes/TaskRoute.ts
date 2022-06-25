import { Router } from 'express';
import { TaskRepository } from '../db/repositories/TaskRepository';
import { prisma } from '../db/prismaClient';
import { TaskService } from '../services/TaskService';
import { TaskController } from '../controllers/TaskController';

export class TaskRoute {
  private _route = Router();
  private taskController: TaskController;

  constructor() {
    this.taskFactory();
    this.config();
  }

  get route() {
    return this._route;
  }

  private taskFactory() {
    const prismaClient = prisma;
    const taskRepository = new TaskRepository(prismaClient);
    const taskService = new TaskService(taskRepository);
    const taskController = new TaskController(taskService);

    this.taskController = taskController;
  }

  private config() {
    this._route.get('/', this.taskController.getAllTasks);
    this._route.post('/', this.taskController.createTask);
  }
}
