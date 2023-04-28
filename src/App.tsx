import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/card";
import UserList from "./components/userList";
import UserItem from "./components/userItem";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/list";
import TodoItem from "./components/todoItem";
import EventsExample from "./components/eventsExample";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

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
    <div>
      <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </div>
  );
}

export default App;
