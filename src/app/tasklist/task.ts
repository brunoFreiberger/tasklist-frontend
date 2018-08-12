import { Priority } from './priority';
export interface Task {
    id: number;
    title: string;
    priority: Priority;
    order: number;
    creationDate: Date;
    completed: boolean;
}
