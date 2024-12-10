import React from "react";
import Datatable from "../components/Datatable";
import { styles } from "../constants/styles";

const headers = [
  {
    id: 1,
    name: "user",
  },
  {
    id: 2,
    name: "amount",
  },
  {
    id: 3,
    name: "plan",
  },
  {
    id: 4,
    name: "status",
  },
  {
    id: 5,
    name: "actions",
  },
];

const Pools = () => {
  return (
    <section className={`${styles.authWrapper} p-6`}>
      <div className="flex flex-col gap-6">
        <h3 className={styles.title}>Pools</h3>
        <Datatable headers={headers} />
      </div>
    </section>
  );
};

export default Pools;
