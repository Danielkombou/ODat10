import React, { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (100000 * 30 * 112 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    timerComponents.push(
      <React.Fragment key={interval}>
        <div className="p-1 md:p-4 bg-white shadow-md rounded text-center w-16 md:w-20">
          <div className="text-xl md:text-2xl font-bold text-blue-600">
            {timeLeft[interval]}
          </div>
          <div className="text-gray-500 text-xs uppercase">{interval}</div>
        </div>
        {index < array.length - 1 && (
          <div className="flex items-center text-xl md:text-2xl font-bold text-blue-500">
            :
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Countdown;
