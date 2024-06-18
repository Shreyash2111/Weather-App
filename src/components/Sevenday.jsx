import React from "react";
import Box from "./Box";
const Sevenday = ({ day }) => {
  return (
    <div className="w-full shadow-lg shadow-slate-500/50  dark:shadow-black/0 text-blue-950 bg-white dark:bg-slate-800 rounded-lg p-2 dark:text-slate-400">
      <h1 className="text-md font-semibold mb-2">Extended Forecast</h1>
      <ul className="flex justify-between p-2 max[450px]:p-0">
        {day.map(
          (m, i) =>
            i < 7 && (
              <li key={i}>
                <Box day={m} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Sevenday;
