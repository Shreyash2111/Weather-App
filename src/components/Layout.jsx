import React from "react";
import Box from "./Box";
import { FaWind } from "react-icons/fa";
import { IoIosCompass } from "react-icons/io";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
const Layout = ({ data, day }) => {
  return (
    <div className="w-full">
      <div className="w-full shadow-lg shadow-slate-500/50 dark:shadow-black/0  bg-white text-blue-950 dark:text-slate-400 dark:bg-gradient-to-t from-slate-900 to-purple-900 rounded-lg p-2  flex flex-col mb-4">
        <h1 className="text-xl font-bold  mb-5">Current Weather</h1>
        <div className="flex w-full h-full justify-around gap-4  font-semibold p-2 max[360px]:p-0 lg:px-10">
          <div className="flex flex-col gap-6 lg:gap-0 items-start   ">
            <h1 className=" text-lg lg:text-2xl   font-bold">
              {data && data.place}
            </h1>
            <div className="flex gap-4 items-center">
              <img src={data.icon} alt="" className="w-10 lg:w-24" />
              <h2 className="text-2xl lg:text-4xl  ">
                {data && data.temp}
                <sup>o</sup>
              </h2>
            </div>
            <h1 className="text-lg lg:text-2xl font-bold ">
              {data && data.desc}
            </h1>
          </div>
          <div className=" text-md lg:text-lg flex flex-col gap-2 justify-between">
            <h1 className="mb-2">
              Feels like {data && data.feel} <sup>o</sup>
            </h1>
            <div className="flex  gap-4">
              <div className="flex justify-center items-center">
                <FaLongArrowAltUp />
                <h1>
                  {data && data.max} <sup>o</sup>
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <FaLongArrowAltDown />
                <h1>
                  {data && data.min}
                  <sup>o</sup>
                </h1>
              </div>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center">
              <FaDroplet />
              <h1>Humidity</h1>
              <h1>{data && data.humidity}%</h1>
            </div>
            <div className="flex gap-2  lg:gap-4 items-center">
              <FaWind />
              <h1>Wind</h1>
              <h1>{data && data.wind}kph</h1>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center">
              <IoIosCompass />
              <h1>Pressure</h1>
              <h1>{data && data.pressure}hpa</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full shadow-lg shadow-slate-500/50  dark:shadow-black/0 text-blue-950 bg-white dark:bg-gradient-to-t from-slate-900 to-purple-900 rounded-lg p-2 dark:text-slate-400">
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
    </div>
  );
};

export default Layout;
