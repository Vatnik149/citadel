export interface ITask {
    id: number;
    kind: string;
    number: string;
    theme: string;
    complexity: number;
    start_at: string;
    author: string;
    description: string;
    groups: {
        group: string;

        students:{
            student:string;
        }[]
    }[];
    running_cts: {};
}