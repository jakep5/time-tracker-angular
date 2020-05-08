export class Task {
    public id: number;
    public name: string;
    public hours: number = 0;
    public userId: number = 1;
    public priority: string; //low, med, high?
}