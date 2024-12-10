import React from "react";

const Datatable = ({ headers, data }) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {headers &&
            headers.map((hd) => {
              return <th key={hd.id}>{hd.name}</th>;
            })}
        </tr>
      </thead>
    </table>
  );
};

export default Datatable;
