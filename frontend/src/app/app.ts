import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  tasks: Task[] = [];
  newTitle = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    const title = this.newTitle.trim();
    if (!title) return;
    this.taskService.create(title).subscribe(() => {
      this.newTitle = '';
      this.loadTasks();
    });
  }

  toggleTask(id: number) {
    this.taskService.toggle(id).subscribe(() => this.loadTasks());
  }

  deleteTask(id: number) {
    this.taskService.delete(id).subscribe(() => this.loadTasks());
  }
}
