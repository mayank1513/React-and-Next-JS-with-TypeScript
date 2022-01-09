import React from "react";
import { taskType } from "../utils";
import { TodoListItem } from "./TodoListItem";

interface Props {
  tasks: taskType[];
  title: string;
  updateTasks;
}
class TodoList extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <br />
        <h2>{this.props.title}</h2>
        <ul style={{ listStyle: "none" }}>
          {this.props.tasks.map((task) => (
            <TodoListItem
              updateTasks={this.props.updateTasks}
              key={task.task}
              task={task}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
