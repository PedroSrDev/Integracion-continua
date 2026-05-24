import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({ name: 'doneCount', standalone: true })
export class DoneCountPipe implements PipeTransform {
  transform(tasks: Task[]): number {
    return tasks.filter(t => t.done).length;
  }
}
