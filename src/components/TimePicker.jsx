import React, { useEffect, useState } from "react";
const hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const minutess = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];
const TimePicker = ({ handleTime }) => {
  const [hour, setHour] = useState("3");
  const [minutes, setMinutes] = useState("00");
  const [dayTime, setDayTime] = useState("PM");

  useEffect(() => {
    handleTime(`${hour}:${minutes} ${dayTime}`);
  }, [hour, minutes, dayTime]);
  return (
    <div className="bg-white  container">
      <div className="container mx-auto  bg-gray-900">
        <div className="w-full inline-flex text-lg border rounded-md shadow-lg p-2">
          <select
            name=""
            id=""
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="px-2 outline-none appearance-none bg-transparent"
          >
            {hours.map((hour, index) => {
              return (
                <option value={hour} key={index}>
                  {hour}
                </option>
              );
            })}
          </select>
          <span className="px-2">:</span>
          <select
            name=""
            id=""
            value={minutes}
            className="px-2 outline-none appearance-none bg-transparent"
            onChange={(e) => setMinutes(e.target.value)}
          >
            {minutess.map((minute, index) => {
              return (
                <option value={minute} key={index}>
                  {minute}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id=""
            value={dayTime}
            className="px-2 outline-none appearance-none bg-transparent"
            onChange={(e) => setDayTime(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
