import React from "react";
import Datatable from "../components/Datatable";
import { styles } from "../constants/styles";

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
    <section className={`${styles.authWrapper} p-6`}>
      <div className="flex flex-col gap-6">
        <h3 className={styles.title}>Users</h3>
        <Datatable headers={headers} />
      </div>
    </section>
  );
};

export default Users;
