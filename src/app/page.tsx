"use client"

import { useState, useEffect } from 'react';

export default function Home() {
  const [point, setPoint] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseFloat(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', point.toString());
  }, [point]);

  const incrementPoint = () => {
    if (point >= 10) {
      setPoint(prevPoint => prevPoint + 0.5);
    } else {
      setPoint(prevPoint => prevPoint + 1);
    }
  };

  const decrementPoint = () => {
    if (point > 10) {
      setPoint(prevPoint => prevPoint - 0.5);
    } else {
      setPoint(prevPoint => prevPoint - 1);
    }
  };

  return (
    <main className="flex flex-col gap-[30px] h-screen w-screen py-[60px] px-[30px] lg:px-[180px] md:px-[120px] text-center justify-center ">
      <div className='flex flex-col bg-blue-500 py-4 px-4 rounded-2xl'>
        <div className='flex flex-col gap-1'>
          <text className='text-2xl font-bold'>Jumlah bola:</text>
          <text className='text-2xl'>{point - 10 >= 0 ? 10 + (point - 10)*2 : point}</text>
        </div>
      </div>

      <div className='flex flex-col gap-8 border-[2px] px-[18px] py-[18px] border-blue-600 rounded-2xl'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-5xl'>{point}</h1>
          <h2 className="font-semibold text-xl">point</h2>
        </div>
        

        <div className='flex flex-row gap-3 w-full'>
          <button className="flex bg-red-500 rounded-xl w-full p-3 text-[#f5f5f5] font-bold justify-center text-xl" onClick={decrementPoint} disabled={point === 0}>-</button>
          <button className="flex bg-green-500 rounded-xl w-full p-3 text-[#f5f5f5] font-bold justify-center text-xl" onClick={incrementPoint}>+</button>
        </div>
      </div>
    </main>
  );
}
