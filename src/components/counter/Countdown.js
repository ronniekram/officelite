import React, { useEffect, useState } from 'react';
import { countdown } from '../../assets/styles';

const Countdown = () => {
  const future = new Date(Date.now() + 2592000000);
  const futureString = future.toDateString().split(' ').slice(1).join(' ');

  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setInterval(() => setTime(), 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <article className="w-10/12 font-kuhbm">
      <h1 className="text-base tracking-wider mx-1.5 py-2">COMING  
        <span className="text-custom-blue-dk px-1">
        {futureString.toUpperCase()}
        </span>
      </h1>
      <div className="flex flex-row w-3/4">
        <div className={countdown.time}>
          <div>{date.days}</div>
          <div className={countdown.span}>days</div>
        </div>
        <div className={countdown.time}>
          <div>{date.hours}</div>
          <div className={countdown.span}>hours</div>
        </div>
        <div className={countdown.time}>
          <div>{date.minutes}</div>
          <div className={countdown.span}>minutes</div>
        </div>
        <div className={countdown.time}>
          <div>{date.seconds}</div>
          <div className={countdown.span}>seconds</div>
        </div>
      </div>
    </article>
  );
};

export default Countdown;