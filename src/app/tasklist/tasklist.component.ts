import { MatDialog } from '@angular/material';
import { TasklistService } from './tasklist.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogEditTaskComponent } from '../dialog-edit-task/dialog-edit-task.component';
import { Priority } from './priority';
import { Task } from './task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
/**
 * @author Bruno Henrique Freiberger
 */
export class TasklistComponent implements OnInit {

  public newTask: Task = { completed: false, priority: Priority.low } as Task;

  todoList: Array<Task> = [
    // {
    //   id: 0,
    //   title: 'Item 1',
    //   orderTask: 0,
    //   priority: Priority.medium,
    //   creationDate: new Date(),
    //   completed: false
    // },
    // {
    //   id: 1,
    //   title: 'Item 2',
    //   orderTask: 1,
    //   priority: Priority.low,
    //   creationDate: new Date(),
    //   completed: false
    // },
    // {
    //   id: 2,
    //   title: 'Item 3',
    //   orderTask: 2,
    //   priority: Priority.high,
    //   creationDate: new Date(),
    //   completed: false
    // }
  ];

  completedList: Array<Task> = [
    // {
    //   id: 1,
    //   title: 'Item 11',
    //   orderTask: 0,
    //   priority: Priority.high,
    //   creationDate: new Date(),
    //   completed: true
    // },
    // {
    //   id: 2,
    //   title: 'Item 2333',
    //   orderTask: 1,
    //   priority: Priority.medium,
    //   creationDate: new Date(),
    //   completed: true
    // },
    // {
    //   id: 3,
    //   title: 'Item 3444',
    //   orderTask: 2,
    //   priority: Priority.low,
    //   creationDate: new Date(),
    //   completed: true
    // }
  ];

  constructor(public dialog: MatDialog, public tasklistService: TasklistService) { }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks(): void {
    this.tasklistService.getAllTasks().subscribe((res: Array<Task>) => {
      this.todoList = res.filter(task => !task.completed);
      this.completedList = res.filter(task => task.completed);
    });
  }

  /**
   * Method for register a new task
   */
  public addTask(): void {
    this.newTask.creationDate = new Date();
    this.newTask.orderTask = this.todoList.length;
    this.newTask.priority = +this.newTask.priority;
    this.tasklistService.save(this.newTask).subscribe(res => {
      this.todoList.push(res);
    });
    this.newTask = {} as Task;
  }

  /**
   * This method will be complete the task of TODO list and reload lists
   * @param task that will be marked as completed
   */
  public completeTask(task: Task): void {
    this.tasklistService.save(task).subscribe(res => {
      this.getTasks();
    });
  }

  /**
   * Method for get flag style
   * @param item Task of list
   */
  public getFlagType(item: Task): string {
    const priority = +item.priority; // parse string to number
    if (priority === 0) {
      return 'low';
    } else if (priority === 1) {
      return 'medium';
    } else {
      return 'high';
    }
  }

  /**
   * Open edit dialog
   * @param task that you want edit
   */
  editTaskDialog(task: Task): void {
    console.log(task);
    const dialogRef = this.dialog.open(DialogEditTaskComponent, {
      width: '1000px',
      data: { task: task }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.tasklistService.save(result).subscribe(res => {
        this.getTasks();
      });
    });
  }

  /**
   * Open remove dialog
   * @param task that you want remove
   */
  removeTaskDialog(task: Task): void {
    console.log(task);
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '500px',
      data: { title: 'Remover', description: 'Deseja excluir esta tarefa?', buttonText: 'Excluir' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasklistService.delete(task.id).subscribe(() => { this.getTasks(); });
      }
    });
  }

  /**
   * This method get a conclusion percent of tasks in relation to the total tasks
   */
  public getPercentOfConclusion(): number {
    return Math.round((this.completedList.length * 100) / (this.todoList.length + this.completedList.length)) || 0;
  }

  public saveOrder(tasks: Array<Task>): void {
    this.tasklistService.saveOrder(tasks).subscribe(() => { });
  }

}
