// components/Clock.js
"use client"; // Mark this component as a Client Component

import { useState, useEffect } from "react";
import "../styles/globals.css";

// Function to calculate time remaining until midnight
const getTimeRemaining = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Set to midnight
  const timeDiff = midnight - now; // Difference in milliseconds

  const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const milliseconds = Math.floor(timeDiff % 1000);

  return { hours, minutes, seconds, milliseconds };
};

const Clock = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    // Update the remaining time once the component is mounted
    const updateTimer = () => setTimeRemaining(getTimeRemaining());
    updateTimer();

    const timer = setInterval(updateTimer, 10); // Update every 10 milliseconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="clock">
      {timeRemaining.hours.toString().padStart(2, "0")}:
      {timeRemaining.minutes.toString().padStart(2, "0")}:
      {timeRemaining.seconds.toString().padStart(2, "0")}:
      {timeRemaining.milliseconds.toString().padStart(3, "0")}
    </div>
  );
};

export default Clock;
