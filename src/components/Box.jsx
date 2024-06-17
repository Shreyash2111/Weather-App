import React from "react";

const Box = ({ day }) => {
  return (
    <div className="font-semibold text-sm  dark:text-slate-400 flex flex-col items-center justify-center">
      <h1>{day.date}</h1>
      <img src={day.icon} alt="" className="w-10 sm:w-16" />
      <h1>{day.text}</h1>
      <h2 className="text-sm">
        {day.max}
        <sup>o</sup>/ {day.min}
        <sup>o</sup>
      </h2>
    </div>
  );
};

export default Box;
