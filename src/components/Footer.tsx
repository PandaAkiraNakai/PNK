import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-purple-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">PNK</span>
                <span className="text-xs text-purple-400 font-medium -mt-1">INMOBILIARIA</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Tu plataforma confiable para encontrar la propiedad perfecta en Chile. 
              Conectamos compradores, vendedores y arrendatarios con la mejor experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Comprar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Arrendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vender</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tasaciones</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Asesoría Legal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Créditos Hipotecarios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seguros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inspecciones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mudanzas</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Av. Providencia 1234, Santiago</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+56 2 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">info@pnkinmobiliaria.cl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 PNK INMOBILIARIA. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;