import React from 'react';
import { X, MapPin, Car, Bath, Bed, Square, Calendar, Hash, Phone, Mail, Heart, Share2 } from 'lucide-react';
import { Property } from '../App';

interface PropertyDetailModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, isOpen, onClose }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header with image */}
          <div className="relative h-64 md:h-80">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {property.type}
              </span>
            </div>
            {property.featured && (
              <div className="absolute top-4 left-20">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Destacado
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
              </button>
              <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={onClose}
                className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Código: {property.propertyCode}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title and Price */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                {property.title}
              </h2>
              <span className="text-2xl md:text-3xl font-bold text-purple-600">
                {property.price}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">{property.location}</span>
            </div>

            {/* Property details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {property.beds && (
                <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <Bed className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-semibold">{property.beds}</div>
                    <div className="text-sm text-gray-600">Dormitorios</div>
                  </div>
                </div>
              )}
              {property.baths && (
                <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <Bath className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-semibold">{property.baths}</div>
                    <div className="text-sm text-gray-600">Baños</div>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <Square className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-semibold">{property.area}</div>
                  <div className="text-sm text-gray-600">Superficie</div>
                </div>
              </div>
              {property.parking && (
                <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                  <Car className="h-5 w-5 text-purple-600" />
                  <div>
                    <div className="font-semibold">{property.parking}</div>
                    <div className="text-sm text-gray-600">Estacionamientos</div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Descripción</h3>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Información Adicional</h3>
                <div className="space-y-2">
                  {property.yearBuilt && (
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-700">Año de construcción: {property.yearBuilt}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Hash className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Código: {property.propertyCode}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              {property.contact && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Agente de Contacto</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="font-semibold text-purple-900 mb-2">{property.contact.agent}</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-purple-600" />
                        <a href={`tel:${property.contact.phone}`} className="text-purple-700 hover:text-purple-800">
                          {property.contact.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-purple-600" />
                        <a href={`mailto:${property.contact.email}`} className="text-purple-700 hover:text-purple-800">
                          {property.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Contactar Agente
              </button>
              <button className="flex-1 bg-white text-purple-600 border-2 border-purple-600 py-3 px-6 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-medium">
                Agendar Visita
              </button>
              <button className="md:w-auto bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;