export interface Task {
    id?: number;
    title: string;
    daysOfWeek: number[];
    time: string;
    timezone: string;
    lastExecutedAt?: Date | null;
    isExecuted?: boolean | null;
}
