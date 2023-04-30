import { FC, useState, useEffect } from "react";
import { ITodo } from "../types/types";
import axios from "axios";
import List from "./list";
import TodoItem from "./todoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodosPage;
