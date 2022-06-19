import React from "react";
import { tasks } from "../utils";
import TodoList from "./TodoList";
import { taskType } from "../utils";
import styles from "./TodoApp.module.css";
import UserInput from "./UserInput";

const TaskKey = "tasks";
class TodoApp extends React.Component {
  state: Readonly<{ tasks: taskType[] }> = { tasks };
  constructor(props) {
    super(props);
    // this.updateTasks = this.updateTasks.bind(this);
  }
  updateTasks = () => {
    this.setState({ tasks: [...this.state.tasks] });
    localStorage.setItem(TaskKey, JSON.stringify(this.state));
  };
  addTask = (task: string) => {
    const newTask: taskType = {
      task,
      completed: false,
      details: "",
    };
    const newState = { tasks: [...this.state.tasks, newTask] };
    this.setState(newState);
    localStorage.setItem(TaskKey, JSON.stringify(newState));
  };
  render(): React.ReactNode {
    return (
      <main className={styles["todo-list"]}>
        <UserInput addTask={this.addTask} />
        <TodoList
          updateTasks={this.updateTasks}
          title="To do Items"
          tasks={this.state.tasks.filter((task) => !task.completed)}
        />
        <TodoList
          updateTasks={this.updateTasks}
          title="Completed Tasks"
          tasks={this.state.tasks.filter((task) => task.completed)}
        />
      </main>
    );
  }
  componentDidMount(): void {
    const tasks1 = localStorage.getItem(TaskKey);
    this.setState(tasks1 ? JSON.parse(tasks1) : tasks);
  }
}

export default TodoApp;
