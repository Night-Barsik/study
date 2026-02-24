"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const multiplyByTwo = () => {
    if (!isNaN(number) && number !== "") {
      setResult(number * 2);
    } else {
      alert("Пожалуйста, введите число");
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Основной контент */}
      <main className="flex flex-col items-center justify-center gap-4 pt-20">
        <h1 className="text-2xl font-bold">Умножение числа на 2</h1>
        
        <div className="flex gap-2">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.valueAsNumber)}
            placeholder="Введите число"
            className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white"
          />
          
          <button
            onClick={multiplyByTwo}
            className="rounded-lg bg-blue-500 px-6 py-2 text-white transition hover:bg-blue-600"
          >
            Умножить на 2
          </button>
        </div>

        {result !== null && (
          <div className="mt-4 text-xl">
            Результат: <span className="font-bold">{result}</span>
          </div>
        )}
      </main>
    </div>
  );
}