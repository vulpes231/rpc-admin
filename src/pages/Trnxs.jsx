import React, { useEffect, useState } from "react";
import Datatable from "../components/Datatable";
import { styles } from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../constants";
import { getAllTrnx } from "../features/trnxSlice";
import Approvemodal from "../components/Approvemodal";

const headers = [
  {
    id: "user",
    name: "User",
  },
  {
    id: "gateway",
    name: "Gateway",
  },
  {
    id: "transactionType",
    name: "Type",
  },
  {
    id: "amount",
    name: "amount",
  },
  {
    id: "status",
    name: "Status",
  },
  {
    id: "actions",
    name: "Actions",
  },
];

const Trnxs = ({ setActive }) => {
  const dispatch = useDispatch();
  const { trnxs } = useSelector((state) => state.trnx);
  const accessToken = getAccessToken();

  const [approveModal, setApproveModal] = useState(false);
  const [transactionId, setTransactionId] = useState(false);

  useEffect(() => {
    if (accessToken) {
      dispatch(getAllTrnx());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    setActive("trnxs");
  }, [setActive]);

  const handleAction = (action, transactionId) => {
    console.log(`Action: ${action}, Transaction ID: ${transactionId}`);
    setTransactionId(transactionId);
    setApproveModal(true);
  };
  const closeModal = () => {
    setTransactionId(false);
    setApproveModal(false);
  };

  const modifiedTransactions =
    trnxs &&
    trnxs.map((transaction) => ({
      ...transaction,
      actions: (
        <select
          onChange={(e) => handleAction(e.target.value, transaction._id)}
          className="p-2 border rounded"
        >
          <option value="">Select action</option>
          <option value="approve">Approve</option>
          <option value="reject">Reject</option>
        </select>
      ),
      status: transaction.status,
    }));

  return (
    <section className={`${styles.authWrapper} p-6`}>
      <div className="flex flex-col gap-6">
        <h3 className={styles.title}>Transactions</h3>
        <Datatable headers={headers} data={modifiedTransactions} rowKey="_id" />
      </div>
      {approveModal && (
        <Approvemodal trnxId={transactionId} close={closeModal} />
      )}
    </section>
  );
};

export default Trnxs;
