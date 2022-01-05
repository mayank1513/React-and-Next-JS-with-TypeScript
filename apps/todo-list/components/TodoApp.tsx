import React from "react";
import { tasks } from "../utils";
class TodoApp extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <h1>Todo App</h1>
                <h2>To dos</h2>
                <ul>
                    {
                        tasks.map(
                            (task, ind) => (!task.completed &&
                                <li key={task.task + ind}>
                                    {task.task}
                                </li>)
                        )

                    }
                </ul>
                <h2>Completed</h2>
                <ul>
                    {
                        tasks.map(
                            (task, ind) => (task.completed &&
                                <li key={task.task + ind}>
                                    {task.task}
                                </li>)
                        )

                    }
                </ul>
            </main>
        )
    }
}

export default TodoApp