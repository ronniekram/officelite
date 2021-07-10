import React, { useEffect, useState } from 'react';

const Countdown = () => {
  // date 30 days from now
  const future = new Date(Date.now() + 2592000000);
  // const [future, setFuture] = useState(new Date(Date.now() + 2592000000).getTime());
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setInterval(() => setTime(), 1000)
  }, []);

  const setTime = () => {
    if (future) {
      const current = new Date().getTime();
      const waitTime = future.getTime() - current;

      let days = Math.floor(waitTime / (1000 * 60 * 60 * 24));

      let hours = Math.floor((waitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      let minutes = Math.floor((waitTime % (1000 * 60 * 60)) / (1000 * 60));

      let seconds = Math.floor((waitTime % (1000 * 60)) / 1000);

      const addZeroes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (addZeroes.includes(hours)) {
        hours = `0${hours}`;
      } else if (addZeroes.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (addZeroes.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setDate({ 
        days: days.toString(), 
        hours: hours.toString(), 
        minutes: minutes.toString(), 
        seconds: seconds.toString() 
      });
    }
  };

  return (
    <article>
      <h1>Countdown to {future.toDateString()}</h1>
    </article>
  );
};

export default Countdown;