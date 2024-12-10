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
    name: "gateway",
  },
  {
    id: 3,
    name: "type",
  },
  {
    id: 4,
    name: "status",
  },
  {
    id: 4,
    name: "actions",
  },
];

const Trnxs = () => {
  return (
    <section className={`${styles.authWrapper} p-6`}>
      <div className="flex flex-col gap-6">
        <h3 className={styles.title}>transactions</h3>
        <Datatable headers={headers} />
      </div>
    </section>
  );
};

export default Trnxs;
