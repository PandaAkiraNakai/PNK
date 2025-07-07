import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra tu hogar idealS
            <span className="block text-purple-200">en Chile</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            Con PNK INMOBILIARIA descubre miles de propiedades en todo Chile. Casas, departamentos y terrenos en las mejores ubicaciones.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Search className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">25,000+</div>
                <div className="text-purple-200">Propiedades</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">16</div>
                <div className="text-purple-200">Regiones</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/20 p-3 rounded-full">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-purple-200">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
