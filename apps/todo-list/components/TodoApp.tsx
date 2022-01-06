import React from "react";
import { tasks } from "../utils";
import TodoList from "./TodoList";
import { taskType } from "../utils";
class TodoApp extends React.Component {
    state: Readonly<{ tasks: taskType[] }> = { tasks };
    constructor(props) {
        super(props);
        // this.updateTasks = this.updateTasks.bind(this);
    }
    updateTasks = () => {
        this.setState({ tasks: [...this.state.tasks] })
    }
    render(): React.ReactNode {
        return (
            <main>
                <TodoList updateTasks={this.updateTasks} title="To dos" tasks={this.state.tasks.filter(task => !task.completed)} />
                <TodoList updateTasks={this.updateTasks} title="Completed" tasks={this.state.tasks.filter(task => task.completed)} />
            </main>
        )
    }
}

export default TodoApp