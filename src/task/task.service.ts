import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) { }

  create(createTaskDto: CreateTaskDto, id: number) {
    createTaskDto.userId = id;
    return this.taskRepository.save(createTaskDto);
  }

  findAll(id: number) {
    return this.taskRepository.findBy({ userId: id });
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ taskId: id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto)
  }

  remove(id: number) {
    return this.taskRepository.delete(id)
  }

}
