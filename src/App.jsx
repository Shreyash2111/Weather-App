import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfinitySpin } from "react-loader-spinner";
import Layout from "./components/Layout";
import Input from "./components/Input";
import Themeswitcher from "./components/Themeswitchers";
function App() {
  const [city, setCity] = useState("Jabalpur");
  const [data, setData] = useState(false);
  const [day, setDay] = useState([]);
  const [dark, setDark] = useState(false);
  const fetchData = async (city) => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=cc0d254882764ab997f174353241106&q=${city}&days=7&aqi=no&alerts=no`
    );
    if (!res.ok) {
      toast.error("Please type correct city name");
      return;
    }
    const d = await res.json();
    setData({
      place: d.location.name,
      humidity: d.current.humidity,
      temp: Math.floor(d.current.temp_c),
      feel: Math.floor(d.current.feelslike_c),
      min: Math.floor(d.forecast.forecastday[0].day.mintemp_c),
      max: Math.floor(d.forecast.forecastday[0].day.maxtemp_c),
      pressure: d.current.pressure_mb,
      wind: d.current.wind_kph,
      desc: d.current.condition.text,
      icon: d.current.condition.icon,
    }); /* */
    for (let i = 0; i < 7; i++) {
      setDay((prev) => [
        ...prev,
        {
          date: d.forecast.forecastday[i].date.slice(5),
          temp: Math.floor(d.current.temp_c),
          min: Math.floor(d.forecast.forecastday[i].day.mintemp_c),
          max: Math.floor(d.forecast.forecastday[i].day.maxtemp_c),
          desc: d.current.condition.text,
          icon: d.current.condition.icon,
        },
      ]);
    }
  };
  useEffect(() => {
    fetchData(city);
  }, []);
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    if (dark) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
  }, [dark]);
  const submitCity = (e) => {
    if (!city) return;
    e.preventDefault();
    setDay([]);
    setData(false);
    fetchData(city);
    setCity("");
  };
  const onChangeBtn = (e) => {
    setDark(e.currentTarget.checked);
  };
  return (
    <div className="w-screen h-screen  flex    items-start justify-center  overflow-hidden">
      <div className="p-2  w-full md:w-1/2  shadow-slate-900 text-blue-950 dark:text-slate-400 rounded-xl bg-blue-100 dark:bg-gradient-to-t from-slate-900 to-purple-900 py-6 px-3 flex flex-col">
        <div className="w-full mb-4 flex justify-between">
          <h1 className=" font-bold text-3xl  mb-4 ">Weather App</h1>
          <Themeswitcher onChangeBtn={onChangeBtn} dark={dark} />
        </div>
        <Input city={city} setCity={setCity} submitCity={submitCity} />
        {data ? (
          <Layout data={data} day={day} />
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
            <InfinitySpin
              visible={true}
              width="200"
              color="#FFFFFF"
              className=""
              ariaLabel="infinity-spin-loading"
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
