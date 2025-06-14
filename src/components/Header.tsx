import React, { useState } from 'react';
import { Menu, X, MessageCircle, User, Code, Home } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'about', label: 'Sobre Mim', icon: User },
    { id: 'projects', label: 'Projetos', icon: Code },
    { id: 'chatbot', label: 'Chatbot', icon: MessageCircle },
  ];

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-green-400 cursor-pointer hover:text-green-300 transition-colors duration-300"
            onClick={() => handlePageChange('home')}
          >
            VE<span className="text-white">R</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                      : 'text-gray-300 hover:text-green-400 hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 fade-in">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-green-400 hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;