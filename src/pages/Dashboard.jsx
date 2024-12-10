import React from "react";
import { styles } from "../constants/styles";

const Dashboard = () => {
  return (
    <section className={`${styles.authWrapper}`}>
      {/* <span className="">{toggle ? <MdMenu /> : <MdClose />}</span> */}
      <div className="flex flex-row h-full">
        <div className="p-6">hello admin</div>
      </div>
    </section>
  );
};

export default Dashboard;
