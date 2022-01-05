import React from "react";

class TodoApp extends React.Component {
    render(): React.ReactNode {
        return (
            <main>
                <h1>Todo App</h1>
                <h2>To dos</h2>
                <ul>
                    <li>Task 1</li>
                </ul>
                <h2>Completed</h2>
                <ul>
                    <li>This task is completed</li>
                </ul>
            </main>
        )
    }
}

export default TodoApp