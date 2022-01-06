import React from "react";
import { tasks } from "../utils";
import TodoList from "./TodoList";
class TodoApp extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <TodoList title="To dos" tasks={tasks.filter(task => !task.completed)} />
                <TodoList title="Completed" tasks={tasks.filter(task => task.completed)} />
            </main>
        )
    }
}

export default TodoApp