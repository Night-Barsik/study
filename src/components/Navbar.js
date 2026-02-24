import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          CR-Training
        </Link>
        
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
          
          {/* Кнопка авторизации */}
          <a href="/auth" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200 font-medium">
            Войти
          </a>
        </div>
      </div>
    </nav>
  );
}