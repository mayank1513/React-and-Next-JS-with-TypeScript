import React from "react";
import { taskType } from "../utils"
// state
// props
// setState

interface PropType {
    task: taskType
}
class TodoListItem extends React.Component<PropType> {
    render(): React.ReactNode {
        return (
            <li key={this.props.task.task}>
                <details onClick={() => {
                    this.props.task.completed = !this.props.task.completed;
                    console.log(this.props.task)
                }}>
                    <summary>{this.props.task.task}</summary>
                    <p>{this.props.task.details}</p>
                </details>
            </li>
        )
    }
}

export { TodoListItem }