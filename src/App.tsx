import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./components/usersPage";
import TodosPage from "./components/todosPage";
import { Link } from "react-router-dom";
import UserItemPage from "./components/userItemPage";
import TodoItemPage from "./components/todoItemPage";
// import Card, { CardVariant } from "./components/card";
// import EventsExample from "./components/eventsExample";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/users">Список пользователей</Link>
        <Link to="/todos">Список дел</Link>
      </nav>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <EventsExample />
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card> */
}
