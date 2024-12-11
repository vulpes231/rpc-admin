/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { styles } from "../constants/styles";
import { format } from "date-fns";

const Dashboard = () => {
  const [lastLogin, setLastLogin] = useState("");

  const currentDate = format(new Date(), "dd-MM-yyyy");
  const currentTime = format(new Date(), "HH:mm -a");

  useEffect(() => {
    if (currentDate && currentTime) {
      setLastLogin(`${currentDate}@ ${currentTime}`);
    }
  }, [currentDate, currentTime]);
  return (
    <section className={`${styles.authWrapper}`}>
      {/* <span className="">{toggle ? <MdMenu /> : <MdClose />}</span> */}
      <div className="flex flex-row h-full">
        <div className="p-6 capitalize flex justify-between items-center w-full">
          <h3>hello admin</h3>
          <span>
            <p>{lastLogin}</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
