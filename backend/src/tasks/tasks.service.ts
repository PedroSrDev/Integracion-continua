import { Injectable } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const task: Task = { id: this.idCounter++, title, done: false };
    this.tasks.push(task);
    return task;
  }

  toggleDone(id: number): Task | null {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.done = !task.done;
    return task ?? null;
  }

  remove(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
