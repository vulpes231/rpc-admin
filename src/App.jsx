import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdWallet } from "react-icons/md";
import { FaBuyNLarge, FaUser } from "react-icons/fa";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Trnxs from "./pages/Trnxs";
import Wallets from "./pages/Wallets";
import Users from "./pages/Users";

const authLinks = [
  {
    id: "dash",
    name: "dashboard",
    path: "/dashboard",
  },
  {
    id: "users",
    name: "users",
    path: "/users",
  },
  {
    id: "trnxs",
    name: "trnxs",
    path: "/trnxs",
  },
  {
    id: "wallets",
    name: "wallets",
    path: "/wallets",
  },
];

const App = () => {
  // const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("dash");
  return (
    <div className="h-screen flex">
      <aside
        className={`hidden md:flex h-full flex-col bg-black text-slate-100 w-[280px] p-6 gap-6`}
      >
        <span className="w-full flex justify-between items-center">
          <h3 className="capitalize font-semibold text-2xl">finance hedge</h3>
        </span>
        <div className="flex flex-col gap-6">
          {authLinks.map((link) => {
            const icons =
              link.name === "dashboard" ? (
                <MdHome />
              ) : link.name === "users" ? (
                <FaUser />
              ) : link.name === "trnxs" ? (
                <FaBuyNLarge />
              ) : link.name === "wallets" ? (
                <MdWallet />
              ) : null;
            return (
              <Link
                onClick={() => setActive(link.id)}
                className={`${
                  active === link.id ? "bg-white text-slate-800 p-2" : ""
                } capitalize font-medium flex gap-1 items-center`}
                key={link.id}
                to={link.path}
              >
                {icons}
                {link.name}
              </Link>
            );
          })}
        </div>
      </aside>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/wallets" element={<Wallets />} />
          <Route path="/trnxs" element={<Trnxs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
