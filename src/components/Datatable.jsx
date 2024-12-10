import React from "react";

const Datatable = ({ headers, data }) => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-black text-slate-100 capitalize">
            {headers &&
              headers.map((hd) => {
                return (
                  <th className="px-6 py-2.5 " key={hd.id}>
                    {hd.name}
                  </th>
                );
              })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Datatable;
