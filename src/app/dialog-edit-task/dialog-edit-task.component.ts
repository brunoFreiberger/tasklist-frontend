import { DialogData } from './dialog-data';
import { Task } from '../tasklist/task';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {

  public task: Task;

  constructor(public dialogRef: MatDialogRef<DialogEditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.task = {
      id: data.task.id,
      title: data.task.title,
      priority: data.task.priority,
      orderTask: data.task.orderTask,
      completed: data.task.completed,
      creationDate: data.task.creationDate
    };
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
