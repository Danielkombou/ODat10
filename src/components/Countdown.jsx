import React, { useEffect, useState } from "react";

// Function to calculate the time left based on the target date
const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = targetDate - now;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
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

const Countdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    const savedDate = localStorage.getItem('targetDate');
    return savedDate ? new Date(savedDate) : new Date("2025-07-24");
  });
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [editable, setEditable] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (editable === null) {
        setTimeLeft(calculateTimeLeft(targetDate));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [editable, targetDate]);

  const handleClick = (unit) => {
    setEditable(unit);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (!isNaN(value) && value >= 0) {
      let newTimeLeft = { ...timeLeft, [editable]: parseInt(value, 10) };

      // Calculate the new target date based on the updated timeLeft
      const now = new Date();
      const newTargetDate = new Date(now.getTime() + (
        newTimeLeft.days * 24 * 60 * 60 * 1000 +
        newTimeLeft.hours * 60 * 60 * 1000 +
        newTimeLeft.minutes * 60 * 1000 +
        newTimeLeft.seconds * 1000
      ));

      setTargetDate(newTargetDate);
      setTimeLeft(newTimeLeft);

      // Save the new target date to local storage
      localStorage.setItem('targetDate', newTargetDate.toISOString());
    }
  };

  const handleBlur = () => {
    setEditable(null);
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    timerComponents.push(
      <React.Fragment key={interval}>
        {editable === interval ? (
          <input
            type="number"
            value={timeLeft[interval]}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            className="p-1 md:p-2 bg-white shadow-md rounded text-center w-16 md:w-20 text-xl md:text-2xl font-bold text-blue-600"
          />
        ) : (
          <div
            className="p-1 md:p-4 bg-white shadow-md rounded text-center w-16 md:w-20 cursor-pointer"
            onClick={() => handleClick(interval)}
          >
            <div className="text-xl md:text-2xl font-bold text-blue-600">
              {timeLeft[interval]}
            </div>
            <div className="text-gray-500 text-xs uppercase">{interval}</div>
          </div>
        )}
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
