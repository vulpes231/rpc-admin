import React, { useEffect } from "react";
import Datatable from "../components/Datatable";
import { styles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getUsers } from "../features/userSlice";

const headers = [
  {
    id: "username",
    name: "Username",
  },
  {
    id: "email",
    name: "Email",
  },
  {
    id: "isKycVerified",
    name: "Verified",
  },
  {
    id: "actions",
    name: "Actions",
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUsers());
    }
  }, [accessToken, dispatch]);

  const handleAction = (action, userId) => {
    console.log(`Action: ${action}, User ID: ${userId}`);
  };

  const modifiedUsers =
    users &&
    users.map((user) => ({
      ...user,
      actions: (
        <select
          onChange={(e) => handleAction(e.target.value, user._id)}
          className="p-2 border rounded"
        >
          <option value="">Select action</option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      ),
      isKycVerified: user.isKycVerified ? "Verified" : "Not Verified",
    }));

  return (
    <section className={`${styles.authWrapper} p-6`}>
      <div className="flex flex-col gap-6">
        <h3 className={styles.title}>Users</h3>
        <Datatable headers={headers} data={modifiedUsers} rowKey="_id" />
      </div>
    </section>
  );
};

export default Users;
