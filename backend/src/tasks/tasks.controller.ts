import { Controller, Get, Post, Delete, Patch, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Patch(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.tasksService.toggleDone(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.tasksService.remove(+id);
    return { deleted: true };
  }
}
