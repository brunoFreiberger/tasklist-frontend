import { Priority } from './priority';
export interface Task {
    id: number;
    title: string;
    priority: Priority;
    orderTask: number;
    creationDate: Date;
    completed: boolean;
}
