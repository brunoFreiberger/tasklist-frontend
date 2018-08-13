import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

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
  public save(task: Task): Observable<any> {
    return this.http.post('api/task/save', task, this.httpOptions);
  }

  /**
   * delete task
   * @param taskId identifier of task to remove
   */
  public delete(taskId: number): Observable<any> {
    return this.http.post('api/task/delete/' + taskId , this.httpOptions);
  }

  /**
   * Return all tasks
   */
  public getAllTasks(): Observable<Array<Task>> {
    return this.http.get('/api/task/all', this.httpOptions) as Observable<Array<Task>>;
  }

  /**
   * Save orderTask of tasks when change
   * @param tasks list of tasks to save orderTask
   */
  public saveOrder(tasks: Array<Task>): Observable<any> {
    return this.http.post('api/task/saveOrder', tasks);
  }

}
