import { DialogEditTaskComponent } from './../dialog-edit-task/dialog-edit-task.component';
import { Priority } from './priority';
import { Task } from './task';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
/**
 * @author Bruno Henrique Freiberger
 */
export class TasklistComponent implements OnInit {

  public newTask: Task = {} as Task;

  todoList: Array<Task> = [
    {
      id: 0,
      title: 'Item 1',
      order: 0,
      priority: Priority.medium,
      creationDate: new Date(),
      completed: false
    },
    {
      id: 1,
      title: 'Item 2',
      order: 1,
      priority: Priority.low,
      creationDate: new Date(),
      completed: false
    },
    {
      id: 2,
      title: 'Item 3',
      order: 2,
      priority: Priority.high,
      creationDate: new Date(),
      completed: false
    }
  ];

  completedList: Array<Task> = [
    {
      id: 1,
      title: 'Item 11',
      order: 0,
      priority: Priority.high,
      creationDate: new Date(),
      completed: true
    },
    {
      id: 2,
      title: 'Item 2333',
      order: 1,
      priority: Priority.medium,
      creationDate: new Date(),
      completed: true
    },
    {
      id: 3,
      title: 'Item 3444',
      order: 2,
      priority: Priority.low,
      creationDate: new Date(),
      completed: true
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * Method for register a new task
   */
  public addTask(): void {
    this.newTask.creationDate = new Date();
    this.todoList.push(this.newTask);
    this.newTask = {} as Task;
  }

  /**
   * This method will be complete the task of TODO list and reload lists
   * @param task that will be marked as completed
   */
  public completeTask(task: Task): void {
    // TODO reload
  }

  /**
   * Method for get flag style
   * @param item Task of list
   */
  public getFlagType(item: Task): string {
    const priority = +item.priority; // parse string to int
    if (priority === 0) {
      return 'low';
    } else if (priority === 1) {
      return 'medium';
    } else {
      return 'high';
    }
  }

  editTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(DialogEditTaskComponent, {
      width: '250px',
      data: { task: task }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      task = result;
    });
  }

  /**
   * This method get a conclusion percent of tasks in relation to the total tasks
   */
  public getPercentOfConclusion(): number {
    return Math.round((this.completedList.length * 100) / (this.todoList.length + this.completedList.length));
  }

}
