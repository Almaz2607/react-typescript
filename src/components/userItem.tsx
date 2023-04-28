import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <div
        style={{ padding: 15, border: "1px solid lightgreen", marginTop: 10 }}
      >
        {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
        {user.address.street}
      </div>
    </>
  );
};

export default UserItem;
