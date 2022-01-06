import React from "react";
import { taskType } from "../utils";
import { TodoListItem } from "./TodoListItem";



class TodoList extends React.Component<{ tasks: taskType[], title: string }> {
    render(): React.ReactNode {
        return (
            <>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.tasks.map(task => <TodoListItem key={task.task} task={task} />)
                    }
                </ul>
            </>
        )

    }
}

export default TodoList