import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import PropertyListings from './components/PropertyListings';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import PropertyDetailModal from './components/PropertyDetailModal';

export interface Property {
  id: number;
  type: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number | null;
  baths: number | null;
  area: string;
  parking: number | null;
  featured: boolean;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  propertyCode?: string;
  contact?: {
    agent: string;
    phone: string;
    email: string;
  };
}

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <Hero />
      <SearchFilters />
      <PropertyListings onPropertyClick={setSelectedProperty} />
      <Footer />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      
      <PropertyDetailModal 
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}

export default App;