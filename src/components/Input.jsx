import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Input = ({ submitCity, city, setCity }) => {
  return (
    <form action="" onSubmit={submitCity}>
      <div className="w-full shadow-lg shadow-slate-500/50 dark:shadow-black/ bg-white dark:bg-gradient-to-t from-slate-900 to-purple-900 rounded-3xl overflow-hidden flex p-1 items-center px-4 gap-2 mb-6">
        <FaMagnifyingGlass
          className="dark:text-white text-xl dark:hover:bg-slate-700 h-full "
          height={12}
          onClick={() => {
            submitCity;
          }}
        />
        <input
          type="text"
          name="search"
          value={city}
          placeholder="Search city name here"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="w-full px-5 p-2 bg-inherit dark:bg-gradient-to-t from-slate-900 to-purple-900 dark:text-white"
          id=""
        />
      </div>
    </form>
  );
};

export default Input;
