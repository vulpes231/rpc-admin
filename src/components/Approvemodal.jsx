import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveTrnx } from "../features/trnxSlice";

const Approvemodal = ({ trnxId, close }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const { approveTrnxLoading, approveTrnxError, trnxApproved } = useSelector(
    (state) => state.trnx
  );

  const handleSubmit = () => {
    console.log(trnxId);
    dispatch(approveTrnx(trnxId));
  };

  useEffect(() => {
    if (trnxApproved) {
      window.location.reload();
    }
  }, [trnxApproved]);

  useEffect(() => {
    if (approveTrnxError) {
      setError(approveTrnxError);
    }
  }, [approveTrnxError]);

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col gap-4 w-full md:w-[300px] md:mx-auto p-6">
        <p>Approve this transaction?</p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <span className="flex items-center justify-end gap-2">
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white w-[180px]"
          >
            {!approveTrnxLoading ? "confirm" : "wait..."}
          </button>
          <button
            onClick={() => close()}
            className="bg-red-600 text-white w-[180px]"
          >
            back
          </button>
        </span>
      </div>
    </div>
  );
};

export default Approvemodal;