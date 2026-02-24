"use client"
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-white py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          {isLogin ? 'Добро пожаловать' : 'Создать аккаунт'}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isLogin ? 'Войдите в свой аккаунт' : 'Зарегистрируйтесь для доступа'}
        </p>
        
        {!isLogin && (
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
              placeholder="Ваше имя"
              required
            />
          </div>
        )}
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            placeholder="your@email.com"
            required
            style={{color: 'black'}}
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            placeholder="••••••••"
            required
            style={{color: 'black'}}
          />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-all font-medium">
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </button>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </p>
      </form>
    </div>
  );
}