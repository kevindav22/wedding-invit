import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge'; // npm install tailwind-merge

const CountdownDate = ({ events = [], className = '', nameClass = '', timeBoxClass = '', labelClass = '' }) => {
  const [timeLeft, setTimeLeft] = useState([]);

  // Default style
  const defaultContainer = 'flex flex-col items-center gap-4 text-white mt-6';
  const defaultName = 'text-lg font-semibold font-playfair tracking-widest mb-4';
  const defaultTimeBox = 'bg-white/5 backdrop-blur-md px-3 py-1 rounded-xl font-playfair text-center';
  const defaultLabel = 'text-base tracking-widest font-playfair';

  // 🕐 Format angka satuan jadi dua digit (01, 02, dst)
  const formatTime = (num) => String(num).padStart(2, '0');

  const parseDate = (str) => {
    const [day, month, year, time] = str.split('-');
    const [hour, minute] = time.split(':');
    return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
  };

  const getRemainingTime = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  useEffect(() => {
    const updateTimes = () => {
      const updated = events.map((ev) => ({
        ...ev,
        remaining: getRemainingTime(parseDate(ev.date)),
      }));
      setTimeLeft(updated);
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, [events]);

  if (!events.length) return null;

  return (
    <div className={twMerge(defaultContainer, className)}>
      {timeLeft.map((ev) => (
        <div key={ev.id} className="flex flex-col items-center">
          {/* Nama event */}
          <h3 className={twMerge(defaultName, nameClass)}>{ev.name}</h3>

          {/* Timebox */}
          <div className="flex justify-center gap-4">
            <TimeBox label="Hari" value={formatTime(ev.remaining?.days ?? 0)} defaultTimeBox={defaultTimeBox} defaultLabel={defaultLabel} timeBoxClass={timeBoxClass} labelClass={labelClass} />
            <TimeBox label="Jam" value={formatTime(ev.remaining?.hours ?? 0)} defaultTimeBox={defaultTimeBox} defaultLabel={defaultLabel} timeBoxClass={timeBoxClass} labelClass={labelClass} />
            <TimeBox label="Menit" value={formatTime(ev.remaining?.minutes ?? 0)} defaultTimeBox={defaultTimeBox} defaultLabel={defaultLabel} timeBoxClass={timeBoxClass} labelClass={labelClass} />
            <TimeBox label="Detik" value={formatTime(ev.remaining?.seconds ?? 0)} defaultTimeBox={defaultTimeBox} defaultLabel={defaultLabel} timeBoxClass={timeBoxClass} labelClass={labelClass} />
          </div>
        </div>
      ))}
    </div>
  );
};

const TimeBox = ({ label, value, defaultTimeBox, defaultLabel, timeBoxClass, labelClass }) => (
  <div className={twMerge(defaultTimeBox, timeBoxClass)}>
    {/* angka waktu */}
    <div className={twMerge('text-3xl font-semibold', timeBoxClass)}>{value}</div>
    {/* label */}
    <div className={twMerge(defaultLabel, labelClass)}>{label}</div>
  </div>
);

export default CountdownDate;
