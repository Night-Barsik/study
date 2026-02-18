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
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Навбар */}
      <nav className="bg-white shadow-lg dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 justify-between">
            {/* Левая часть навбара */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                MyApp
              </Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                  Главная
                </Link>
                <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                  О нас
                </Link>
                <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                  Контакты
                </Link>
                <Link href="/вопросы" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
                  Вопросы
                </Link>
              </div>
            </div>

            {/* Правая часть навбара */}
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
                Войти
              </button>
              <button className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-zinc-800">
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </nav>

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