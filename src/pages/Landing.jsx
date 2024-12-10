import React from "react";
import { styles } from "../constants/styles";

const Landing = () => {
  return (
    <section className={`${styles.wrapper} flex items-center justify-center`}>
      <div className="bg-white md:w-[400px] md:mx-auto p-6 flex flex-col gap-6 shadow-md rounded-sm">
        <h3 className="uppercase font-semibold">admin login</h3>
        <form action="" className="flex flex-col gap-4">
          <div className={styles.inputHolder}>
            <label className={styles.label} htmlFor="">
              username
            </label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.inputHolder}>
            <label className={styles.label} htmlFor="">
              password
            </label>
            <input type="password" className={styles.input} />
          </div>
          <button className={`${styles.button} rounded-sm shadow-md`}>
            login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Landing;
