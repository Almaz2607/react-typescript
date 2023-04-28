import React from "react";
import Card, { CardVariant } from "./components/card";
import UserList from "./components/userList";
import { IUser } from "./types/types";

function App() {
  const users: IUser[] = [
    {
      id: 1,
      name: "Almaz",
      email: "kak@mail.ru",
      address: { city: "Bishkek", street: "High", zipcode: "23432" },
    },
    {
      id: 2,
      name: "Alina",
      email: "alina@gmail.com",
      address: { city: "Moscow", street: "Lenina", zipcode: "58854" },
    },
  ];

  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
