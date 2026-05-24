import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Task[]>(this.api);
  }

  create(title: string) {
    return this.http.post<Task>(this.api, { title });
  }

  toggle(id: number) {
    return this.http.patch<Task>(`${this.api}/${id}/toggle`, {});
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
