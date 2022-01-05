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
                        // line comment
                        /**
                         * Hey I want to document something
                         */
                        /*
                         
                        */
                    }
                    <li>{tasks[0].task}</li>
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