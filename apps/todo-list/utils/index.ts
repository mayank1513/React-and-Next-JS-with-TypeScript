type taskType = {
    task: string,
    details: string,
    completed: boolean
}

export const tasks: taskType[] = [
    {
        task: 'Task 1',
        details: 'Task 1 details',
        completed: false
    },
    {
        task: 'Task 2',
        details: 'Task 2 details',
        completed: true
    },
    {
        task: 'Task 3',
        details: 'Task 3 details',
        completed: false
    }
]