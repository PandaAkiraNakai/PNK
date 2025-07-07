import React from 'react';
import { Heart, MapPin, Car, Bath, Bed, Square } from 'lucide-react';
import { Property } from '../App';

interface PropertyListingsProps {
  onPropertyClick: (property: Property) => void;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ onPropertyClick }) => {
  const properties: Property[] = [
    {
      id: 1,
      type: 'Casa',
      title: 'Hermosa Casa en Las Condes',
      price: 'UF 4.500',
      location: 'Las Condes, Santiago',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 3,
      baths: 2,
      area: '120m²',
      parking: 2,
      featured: true,
      description: 'Hermosa casa ubicada en el exclusivo sector de Las Condes. Cuenta con amplios espacios, jardín privado y excelente conectividad. Ideal para familias que buscan tranquilidad y comodidad.',
      amenities: ['Jardín privado', 'Terraza', 'Bodega', 'Calefacción central', 'Alarma'],
      yearBuilt: 2018,
      propertyCode: 'PNK-001',
      contact: {
        agent: 'María González',
        phone: '+56 9 8765 4321',
        email: 'maria.gonzalez@pnkinmobiliaria.cl'
      }
    },
    {
      id: 2,
      type: 'Departamento',
      title: 'Moderno Departamento en Providencia',
      price: 'UF 2.800',
      location: 'Providencia, Santiago',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 2,
      baths: 1,
      area: '75m²',
      parking: 1,
      featured: false,
      description: 'Moderno departamento en el corazón de Providencia. Excelente ubicación con acceso a metro, centros comerciales y áreas verdes. Perfecto para profesionales jóvenes.',
      amenities: ['Gimnasio', 'Piscina', 'Sala de eventos', 'Portería 24hrs', 'Ascensor'],
      yearBuilt: 2020,
      propertyCode: 'PNK-002',
      contact: {
        agent: 'Carlos Rodríguez',
        phone: '+56 9 7654 3210',
        email: 'carlos.rodriguez@pnkinmobiliaria.cl'
      }
    },
    {
      id: 3,
      type: 'Terreno',
      title: 'Terreno con Vista al Mar',
      price: 'UF 1.200',
      location: 'Viña del Mar, Valparaíso',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: null,
      baths: null,
      area: '500m²',
      parking: null,
      featured: false,
      description: 'Excelente terreno con vista panorámica al mar en Viña del Mar. Ideal para construir la casa de tus sueños. Ubicación privilegiada con fácil acceso a la playa.',
      amenities: ['Vista al mar', 'Acceso pavimentado', 'Servicios básicos', 'Zona residencial'],
      yearBuilt: null,
      propertyCode: 'PNK-003',
      contact: {
        agent: 'Ana Martínez',
        phone: '+56 9 6543 2109',
        email: 'ana.martinez@pnkinmobiliaria.cl'
      }
    },
    {
      id: 4,
      type: 'Casa',
      title: 'Casa Familiar en Maipú',
      price: 'UF 3.200',
      location: 'Maipú, Santiago',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      area: '180m²',
      parking: 3,
      featured: true,
      description: 'Amplia casa familiar en Maipú, perfecta para familias grandes. Cuenta con patio amplio, quincho y excelente distribución de espacios.',
      amenities: ['Quincho', 'Patio amplio', 'Bodega', 'Portón automático', 'Antejardín'],
      yearBuilt: 2015,
      propertyCode: 'PNK-004',
      contact: {
        agent: 'Pedro Silva',
        phone: '+56 9 5432 1098',
        email: 'pedro.silva@pnkinmobiliaria.cl'
      }
    },
    {
      id: 5,
      type: 'Departamento',
      title: 'Departamento con Terraza',
      price: 'UF 3.500',
      location: 'Ñuñoa, Santiago',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 3,
      baths: 2,
      area: '95m²',
      parking: 1,
      featured: false,
      description: 'Departamento con amplia terraza en Ñuñoa. Excelente iluminación natural y ubicación estratégica cerca del metro y centros comerciales.',
      amenities: ['Terraza amplia', 'Logia', 'Bodega', 'Portería', 'Ascensor'],
      yearBuilt: 2019,
      propertyCode: 'PNK-005',
      contact: {
        agent: 'Laura Fernández',
        phone: '+56 9 4321 0987',
        email: 'laura.fernandez@pnkinmobiliaria.cl'
      }
    },
    {
      id: 6,
      type: 'Casa',
      title: 'Casa en Condominio',
      price: 'UF 5.800',
      location: 'La Reina, Santiago',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      area: '220m²',
      parking: 2,
      featured: true,
      description: 'Exclusiva casa en condominio cerrado en La Reina. Máxima seguridad y tranquilidad, con áreas verdes comunes y excelente calidad de construcción.',
      amenities: ['Condominio cerrado', 'Áreas verdes', 'Seguridad 24hrs', 'Sala multiuso', 'Juegos infantiles'],
      yearBuilt: 2021,
      propertyCode: 'PNK-006',
      contact: {
        agent: 'Roberto Morales',
        phone: '+56 9 3210 9876',
        email: 'roberto.morales@pnkinmobiliaria.cl'
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las mejores propiedades disponibles en Chile con PNK INMOBILIARIA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                {property.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                )}
                <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <span className="text-xl font-bold text-purple-600">{property.price}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  {property.beds && (
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds}</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                  {property.parking && (
                    <div className="flex items-center space-x-1">
                      <Car className="h-4 w-4" />
                      <span>{property.parking}</span>
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => onPropertyClick(property)}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium">
            Ver Más Propiedades
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;