import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Bruno Henrique Freiberger
 */
export class TasklistService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'secret-key',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  /**
   * Send task to backend and persist/update
   * @param task obj
   */
  public save(task: Task): boolean {
    this.http.post('/saveTask', task, this.httpOptions);
    return false;
  }

  /**
   * delete task
   * @param taskId identifier of task to remove
   */
  public delete(taskId: number): boolean {
    this.http.post('/removeTask', taskId, this.httpOptions);
    return true;
  }

  /**
   * Return all tasks
   */
  public getTasks(): Array<Task> {
    this.http.get('/getTasks', this.httpOptions);
    return null;
  }

  /**
   * Save order of tasks when change
   * @param tasks list of tasks to save order
   */
  public saveOrder(tasks: Array<Task>): boolean {
    return false;
  }

}
