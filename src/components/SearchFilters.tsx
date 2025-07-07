import React, { useState } from 'react';
import { Search, Filter, MapPin, Home, Building, Trees } from 'lucide-react';
import { chileanRegions } from '../data/regions';

const SearchFilters = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const propertyTypes = [
    { id: 'all', label: 'Todas', icon: Home },
    { id: 'house', label: 'Casas', icon: Home },
    { id: 'apartment', label: 'Departamentos', icon: Building },
    { id: 'land', label: 'Terrenos', icon: Trees },
  ];

  const currentRegion = chileanRegions.find(r => r.id === selectedRegion);
  const currentCommune = currentRegion?.communes.find(c => c.id === selectedCommune);

  const handleSearch = () => {
    console.log('Searching with filters:', {
      propertyType: selectedPropertyType,
      region: selectedRegion,
      commune: selectedCommune,
      sector: selectedSector,
      priceRange
    });
  };

  return (
    <div className="bg-white shadow-lg -mt-10 relative z-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl">
      <div className="max-w-7xl mx-auto p-6">
        {/* Property Type Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {propertyTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedPropertyType(type.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedPropertyType === type.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{type.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Región</label>
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setSelectedCommune('');
                setSelectedSector('');
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            >
              <option value="">Todas las regiones</option>
              {chileanRegions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          {/* Commune */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Comuna</label>
            <select
              value={selectedCommune}
              onChange={(e) => {
                setSelectedCommune(e.target.value);
                setSelectedSector('');
              }}
              disabled={!selectedRegion}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors disabled:bg-gray-100"
            >
              <option value="">Todas las comunas</option>
              {currentRegion?.communes.map((commune) => (
                <option key={commune.id} value={commune.id}>
                  {commune.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              disabled={!selectedCommune}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors disabled:bg-gray-100"
            >
              <option value="">Todos los sectores</option>
              {currentCommune?.sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 font-medium"
            >
              <Search className="h-5 w-5" />
              <span>Buscar</span>
            </button>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="border-t pt-4">
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Filter className="h-4 w-4" />
            <span>Filtros avanzados</span>
          </button>

          {/* Advanced Filters */}
          {isFiltersOpen && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio mínimo</label>
                  <input
                    type="text"
                    placeholder="UF 1.000"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Precio máximo</label>
                  <input
                    type="text"
                    placeholder="UF 10.000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dormitorios</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                    <option value="">Cualquier cantidad</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;