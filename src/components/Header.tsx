import React from 'react';
import { Building2, Menu, X, User, Heart, Bell } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-purple-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">PNK</span>
              <span className="text-xs text-purple-600 font-medium -mt-1">INMOBILIARIA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Comprar</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Arrendar</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Vender</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button 
              onClick={onLoginClick}
              className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Iniciar Sesión</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Comprar</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Arrendar</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Vender</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Proyectos</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-purple-600 transition-colors">Contacto</a>
            <div className="pt-2 border-t">
              <button 
                onClick={onLoginClick}
                className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Iniciar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;