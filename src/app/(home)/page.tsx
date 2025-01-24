import MeetingTypes from "@/components/MeetingTypes";
import React from "react";

const Home = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="flex items-center mx-4">
        <div className="items-center h-[30vh] w-full bg-hero bg-cover bg-center   text-white rounded-[24px]">
          <h2 className="text-lg m-6 font-mono rounded text-center">
            <span className=" bg-neutral-600 px-3 py-2 rounded-md">Upcoming meeting at - 10:00 AM</span>
          </h2>

          <div className="items-center flex flex-col space-y-4">
            <h1 className="text-4xl font-bold lg:text-6xl">{time}</h1>

            <p className="text-lg font-medium text-sky-1 lg:text-3xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypes />
    </>
  );
};

export default Home;
