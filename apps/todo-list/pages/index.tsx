import { NextJSCourseLayout } from "ui";
import TodoApp from "../components/TodoApp";

export default function Index() {
  return (
    <NextJSCourseLayout title="React JS Crash Course: Todo List App">
      <TodoApp />
    </NextJSCourseLayout>
  );
}
