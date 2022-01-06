import React from "react";
import { taskType } from "../utils"
// state
// props
// setState

interface PropType {
    task: taskType, updateTasks
}
class TodoListItem extends React.Component<PropType> {
    render(): React.ReactNode {
        return (
            <li key={this.props.task.task}>
                <details>
                    <summary>
                        {this.props.task.task}
                        <input type="checkbox" checked={this.props.task.completed} name="" id="" onClick={() => {
                            this.props.task.completed = !this.props.task.completed;
                            console.log(this.props.task)
                            this.props.updateTasks();
                        }} />
                    </summary>
                    <p>{this.props.task.details}</p>
                </details>
            </li>
        )
    }
}

export { TodoListItem }