import React from "react";
import Datatable from "../components/Datatable";
const headers = [
  {
    id: 1,
    name: "username",
  },
  {
    id: 2,
    name: "email",
  },
  {
    id: 3,
    name: "verified",
  },
  {
    id: 4,
    name: "actions",
  },
];
const Users = () => {
  return (
    <section>
      <h3>User</h3>
      <Datatable headers={headers} />
    </section>
  );
};

export default Users;
