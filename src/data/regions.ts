export interface Commune {
  id: string;
  name: string;
  sectors: string[];
}

export interface Region {
  id: string;
  name: string;
  communes: Commune[];
}

export const chileanRegions: Region[] = [
  {
    id: 'arica-parinacota',
    name: 'Arica y Parinacota',
    communes: [
      {
        id: 'arica',
        name: 'Arica',
        sectors: ['Centro', 'Chinchorro', 'Población Vicuña', 'San José', 'Villa Frontera']
      },
      {
        id: 'camarones',
        name: 'Camarones',
        sectors: ['Cuya', 'Codpa', 'Esquiña', 'Putre']
      },
      {
        id: 'putre',
        name: 'Putre',
        sectors: ['Putre', 'Socoroma', 'Parinacota', 'Chucuyo']
      },
      {
        id: 'general-lagos',
        name: 'General Lagos',
        sectors: ['Visviri', 'Ancolacane', 'Tacora']
      }
    ]
  },
  {
    id: 'tarapaca',
    name: 'Tarapacá',
    communes: [
      {
        id: 'iquique',
        name: 'Iquique',
        sectors: ['Centro', 'Playa Brava', 'Alto Hospicio', 'Bajo Molle', 'Cavancha']
      },
      {
        id: 'alto-hospicio',
        name: 'Alto Hospicio',
        sectors: ['La Tortuga', 'Huayquique', 'Villa Frontera', 'Nueva Esperanza']
      },
      {
        id: 'pozo-almonte',
        name: 'Pozo Almonte',
        sectors: ['Pozo Almonte', 'La Tirana', 'Mamiña', 'Pica']
      },
      {
        id: 'camiña',
        name: 'Camiña',
        sectors: ['Camiña', 'Moquella', 'Apamilca']
      },
      {
        id: 'colchane',
        name: 'Colchane',
        sectors: ['Colchane', 'Enquelga', 'Cariquima']
      },
      {
        id: 'huara',
        name: 'Huara',
        sectors: ['Huara', 'Tarapacá', 'Pachica']
      },
      {
        id: 'pica',
        name: 'Pica',
        sectors: ['Pica', 'Matilla', 'Quisma']
      }
    ]
  },
  {
    id: 'antofagasta',
    name: 'Antofagasta',
    communes: [
      {
        id: 'antofagasta',
        name: 'Antofagasta',
        sectors: ['Centro', 'Norte Grande', 'Sur', 'Coviefi', 'Villa Colón']
      },
      {
        id: 'mejillones',
        name: 'Mejillones',
        sectors: ['Mejillones', 'Michilla', 'Punta Angamos']
      },
      {
        id: 'sierra-gorda',
        name: 'Sierra Gorda',
        sectors: ['Sierra Gorda', 'Baquedano', 'Caracoles']
      },
      {
        id: 'taltal',
        name: 'Taltal',
        sectors: ['Taltal', 'Paposo', 'Cifuncho']
      },
      {
        id: 'calama',
        name: 'Calama',
        sectors: ['Centro', 'Topater', 'Covadonga', 'Quinta Norte', 'Ayquina']
      },
      {
        id: 'ollague',
        name: 'Ollagüe',
        sectors: ['Ollagüe', 'Amincha', 'Coscaya']
      },
      {
        id: 'san-pedro-atacama',
        name: 'San Pedro de Atacama',
        sectors: ['San Pedro de Atacama', 'Toconao', 'Socaire', 'Peine']
      },
      {
        id: 'tocopilla',
        name: 'Tocopilla',
        sectors: ['Tocopilla', 'Toco', 'María Elena']
      },
      {
        id: 'maria-elena',
        name: 'María Elena',
        sectors: ['María Elena', 'Pedro de Valdivia', 'Quillagua']
      }
    ]
  },
  {
    id: 'atacama',
    name: 'Atacama',
    communes: [
      {
        id: 'copiapo',
        name: 'Copiapó',
        sectors: ['Centro', 'Tierblanca', 'Atacama', 'Paipote', 'Nantoco']
      },
      {
        id: 'caldera',
        name: 'Caldera',
        sectors: ['Caldera', 'Bahía Inglesa', 'Puerto Viejo']
      },
      {
        id: 'tierra-amarilla',
        name: 'Tierra Amarilla',
        sectors: ['Tierra Amarilla', 'Rodríguez', 'Travesía']
      },
      {
        id: 'chañaral',
        name: 'Chañaral',
        sectors: ['Chañaral', 'Barquito', 'Pan de Azúcar']
      },
      {
        id: 'diego-de-almagro',
        name: 'Diego de Almagro',
        sectors: ['Diego de Almagro', 'Inca de Oro', 'El Salvador']
      },
      {
        id: 'vallenar',
        name: 'Vallenar',
        sectors: ['Centro', 'Amberes', 'La Pampa', 'Chanchoquín']
      },
      {
        id: 'alto-del-carmen',
        name: 'Alto del Carmen',
        sectors: ['Alto del Carmen', 'San Félix', 'Cachiyuyo']
      },
      {
        id: 'freirina',
        name: 'Freirina',
        sectors: ['Freirina', 'Villa Freirina', 'Huasco Bajo']
      },
      {
        id: 'huasco',
        name: 'Huasco',
        sectors: ['Huasco', 'Huasco Bajo', 'Los Loros']
      }
    ]
  },
  {
    id: 'coquimbo',
    name: 'Coquimbo',
    communes: [
      {
        id: 'la-serena',
        name: 'La Serena',
        sectors: ['Centro', 'Peñuelas', 'Las Compañías', 'Coquimbo', 'El Milagro']
      },
      {
        id: 'coquimbo',
        name: 'Coquimbo',
        sectors: ['Coquimbo', 'Guayacán', 'Tierras Blancas', 'Parte Alta']
      },
      {
        id: 'andacollo',
        name: 'Andacollo',
        sectors: ['Andacollo', 'Chepiquilla', 'Quebrada Seca']
      },
      {
        id: 'la-higuera',
        name: 'La Higuera',
        sectors: ['La Higuera', 'Los Choros', 'Chungungo']
      },
      {
        id: 'paihuano',
        name: 'Paihuano',
        sectors: ['Paihuano', 'Vicuña', 'Montegrande']
      },
      {
        id: 'vicuña',
        name: 'Vicuña',
        sectors: ['Vicuña', 'Diaguitas', 'Peralillo', 'Rivadavia']
      },
      {
        id: 'illapel',
        name: 'Illapel',
        sectors: ['Illapel', 'Canela', 'Huintil']
      },
      {
        id: 'canela',
        name: 'Canela',
        sectors: ['Canela', 'Canela Baja', 'Mincha']
      },
      {
        id: 'los-vilos',
        name: 'Los Vilos',
        sectors: ['Los Vilos', 'Pichidangui', 'Tilama']
      },
      {
        id: 'salamanca',
        name: 'Salamanca',
        sectors: ['Salamanca', 'Choapa', 'Tunga Norte']
      },
      {
        id: 'ovalle',
        name: 'Ovalle',
        sectors: ['Centro', 'Limarí', 'Recoleta', 'Pueblo Hundido']
      },
      {
        id: 'combarbala',
        name: 'Combarbalá',
        sectors: ['Combarbalá', 'Cogotí', 'Ramadilla']
      },
      {
        id: 'monte-patria',
        name: 'Monte Patria',
        sectors: ['Monte Patria', 'Tulahuén', 'Rapel']
      },
      {
        id: 'punitaqui',
        name: 'Punitaqui',
        sectors: ['Punitaqui', 'Río Hurtado', 'Samo Alto']
      },
      {
        id: 'rio-hurtado',
        name: 'Río Hurtado',
        sectors: ['Río Hurtado', 'Pichasca', 'Serón']
      }
    ]
  },
  {
    id: 'valparaiso',
    name: 'Valparaíso',
    communes: [
      {
        id: 'valparaiso',
        name: 'Valparaíso',
        sectors: ['Puerto', 'Cerro Alegre', 'Cerro Concepción', 'Playa Ancha', 'Viña del Mar']
      },
      {
        id: 'viña-del-mar',
        name: 'Viña del Mar',
        sectors: ['Centro', 'Reñaca', 'Con Con', 'Agua Santa', 'Forestal']
      },
      {
        id: 'concón',
        name: 'Concón',
        sectors: ['Concón', 'Cochoa', 'Los Romeros']
      },
      {
        id: 'quintero',
        name: 'Quintero',
        sectors: ['Quintero', 'Loncura', 'Ventanas']
      },
      {
        id: 'puchuncavi',
        name: 'Puchuncaví',
        sectors: ['Puchuncaví', 'Horcón', 'Maitencillo']
      },
      {
        id: 'casablanca',
        name: 'Casablanca',
        sectors: ['Casablanca', 'Lagunillas', 'Lo Vásquez']
      },
      {
        id: 'juan-fernandez',
        name: 'Juan Fernández',
        sectors: ['Juan Fernández', 'Robinson Crusoe', 'Alejandro Selkirk']
      },
      {
        id: 'petorca',
        name: 'Petorca',
        sectors: ['Petorca', 'Chincolco', 'Pedegua']
      },
      {
        id: 'cabildo',
        name: 'Cabildo',
        sectors: ['Cabildo', 'Artificio', 'Pocuro']
      },
      {
        id: 'papudo',
        name: 'Papudo',
        sectors: ['Papudo', 'Pullally', 'Punta Pite']
      },
      {
        id: 'zapallar',
        name: 'Zapallar',
        sectors: ['Zapallar', 'Catapilco', 'Cachagua']
      },
      {
        id: 'la-ligua',
        name: 'La Ligua',
        sectors: ['La Ligua', 'Longotoma', 'Alicahue']
      },
      {
        id: 'nogales',
        name: 'Nogales',
        sectors: ['Nogales', 'El Melón', 'Artificio']
      },
      {
        id: 'la-calera',
        name: 'La Calera',
        sectors: ['La Calera', 'Artificio', 'Pocuro']
      },
      {
        id: 'hijuelas',
        name: 'Hijuelas',
        sectors: ['Hijuelas', 'La Calera', 'Rabuco']
      },
      {
        id: 'olmue',
        name: 'Olmué',
        sectors: ['Olmué', 'Las Palmas', 'Granizo']
      },
      {
        id: 'limache',
        name: 'Limache',
        sectors: ['Limache', 'Olmué', 'Peñablanca']
      },
      {
        id: 'quilpue',
        name: 'Quilpué',
        sectors: ['Centro', 'Belloto', 'El Retiro', 'Pomona']
      },
      {
        id: 'villa-alemana',
        name: 'Villa Alemana',
        sectors: ['Villa Alemana', 'Peñablanca', 'El Sauce']
      },
      {
        id: 'quillota',
        name: 'Quillota',
        sectors: ['Quillota', 'San Isidro', 'Boco']
      },
      {
        id: 'la-cruz',
        name: 'La Cruz',
        sectors: ['La Cruz', 'Placilla', 'Puangue']
      },
      {
        id: 'san-antonio',
        name: 'San Antonio',
        sectors: ['San Antonio', 'Barrancas', 'Llolleo']
      },
      {
        id: 'cartagena',
        name: 'Cartagena',
        sectors: ['Cartagena', 'Las Cruces', 'El Tabo']
      },
      {
        id: 'el-tabo',
        name: 'El Tabo',
        sectors: ['El Tabo', 'Las Cruces', 'Isla Negra']
      },
      {
        id: 'el-quisco',
        name: 'El Quisco',
        sectors: ['El Quisco', 'Isla Negra', 'Algarrobo']
      },
      {
        id: 'algarrobo',
        name: 'Algarrobo',
        sectors: ['Algarrobo', 'Mirasol', 'San José']
      },
      {
        id: 'santo-domingo',
        name: 'Santo Domingo',
        sectors: ['Santo Domingo', 'Bucalemu', 'Rapel']
      }
    ]
  },
  {
    id: 'metropolitana',
    name: 'Metropolitana',
    communes: [
      {
        id: 'santiago',
        name: 'Santiago',
        sectors: ['Centro', 'Ñuñoa', 'Providencia', 'Las Condes', 'Vitacura']
      },
      {
        id: 'providencia',
        name: 'Providencia',
        sectors: ['Providencia', 'Pedro de Valdivia', 'Los Leones', 'Manuel Montt']
      },
      {
        id: 'las-condes',
        name: 'Las Condes',
        sectors: ['Las Condes', 'Vitacura', 'Kennedy', 'Apoquindo', 'El Golf']
      },
      {
        id: 'vitacura',
        name: 'Vitacura',
        sectors: ['Vitacura', 'Nueva Costanera', 'Bicentenario', 'Santa María']
      },
      {
        id: 'lo-barnechea',
        name: 'Lo Barnechea',
        sectors: ['Lo Barnechea', 'Farellones', 'La Dehesa', 'El Arrayán']
      },
      {
        id: 'ñuñoa',
        name: 'Ñuñoa',
        sectors: ['Ñuñoa', 'Villa Frei', 'Irarrazaval', 'Estadio Nacional']
      },
      {
        id: 'la-reina',
        name: 'La Reina',
        sectors: ['La Reina', 'Prince of Wales', 'Larraín', 'Dragones']
      },
      {
        id: 'peñalolen',
        name: 'Peñalolén',
        sectors: ['Peñalolén', 'La Faena', 'San Luis', 'Lo Hermida']
      },
      {
        id: 'macul',
        name: 'Macul',
        sectors: ['Macul', 'Villa Macul', 'José María Caro', 'Departamental']
      },
      {
        id: 'la-florida',
        name: 'La Florida',
        sectors: ['La Florida', 'Bellavista', 'Vicuña Mackenna', 'Observatorio']
      },
      {
        id: 'puente-alto',
        name: 'Puente Alto',
        sectors: ['Puente Alto', 'Bajos de Mena', 'Villa Nahuel', 'San Bernardo']
      },
      {
        id: 'pirque',
        name: 'Pirque',
        sectors: ['Pirque', 'El Principal', 'Santo Tomás']
      },
      {
        id: 'san-jose-de-maipo',
        name: 'San José de Maipo',
        sectors: ['San José de Maipo', 'Cajón del Maipo', 'El Volcán']
      },
      {
        id: 'maipu',
        name: 'Maipú',
        sectors: ['Maipú', 'Ciudad Satélite', 'Tres Poniente', 'Pajaritos']
      },
      {
        id: 'pudahuel',
        name: 'Pudahuel',
        sectors: ['Pudahuel', 'Lo Prado', 'Barrancas', 'Pudahuel Norte']
      },
      {
        id: 'cerrillos',
        name: 'Cerrillos',
        sectors: ['Cerrillos', 'Lo Valledor', 'Cerrillos Norte']
      },
      {
        id: 'estacion-central',
        name: 'Estación Central',
        sectors: ['Estación Central', 'Chuchunco', 'Quinta Normal']
      },
      {
        id: 'quinta-normal',
        name: 'Quinta Normal',
        sectors: ['Quinta Normal', 'Blanqueado', 'Carrascal']
      },
      {
        id: 'recoleta',
        name: 'Recoleta',
        sectors: ['Recoleta', 'Patronato', 'Cementerio', 'Vega Central']
      },
      {
        id: 'independencia',
        name: 'Independencia',
        sectors: ['Independencia', 'Hipódromo', 'Independencia Norte']
      },
      {
        id: 'conchalí',
        name: 'Conchalí',
        sectors: ['Conchalí', 'Vivaceta', 'Dorsal']
      },
      {
        id: 'huechuraba',
        name: 'Huechuraba',
        sectors: ['Huechuraba', 'Chicureo', 'Piedra Roja']
      },
      {
        id: 'quilicura',
        name: 'Quilicura',
        sectors: ['Quilicura', 'Renca', 'Norte Grande']
      },
      {
        id: 'renca',
        name: 'Renca',
        sectors: ['Renca', 'Villa Renca', 'Cerro Navia']
      },
      {
        id: 'cerro-navia',
        name: 'Cerro Navia',
        sectors: ['Cerro Navia', 'Renca', 'Maipú']
      },
      {
        id: 'lo-prado',
        name: 'Lo Prado',
        sectors: ['Lo Prado', 'Blanqueado', 'Maipú']
      },
      {
        id: 'san-miguel',
        name: 'San Miguel',
        sectors: ['San Miguel', 'Gran Avenida', 'Club Hípico']
      },
      {
        id: 'la-cisterna',
        name: 'La Cisterna',
        sectors: ['La Cisterna', 'Bicentenario', 'El Bosque']
      },
      {
        id: 'el-bosque',
        name: 'El Bosque',
        sectors: ['El Bosque', 'Gran Avenida', 'San Bernardo']
      },
      {
        id: 'san-bernardo',
        name: 'San Bernardo',
        sectors: ['San Bernardo', 'Nos', 'Buin']
      },
      {
        id: 'buin',
        name: 'Buin',
        sectors: ['Buin', 'Linderos', 'Valdivia de Paine']
      },
      {
        id: 'paine',
        name: 'Paine',
        sectors: ['Paine', 'Hospital', 'Huelquén']
      },
      {
        id: 'calera-de-tango',
        name: 'Calera de Tango',
        sectors: ['Calera de Tango', 'Lonquén', 'San Bernardo']
      },
      {
        id: 'pedro-aguirre-cerda',
        name: 'Pedro Aguirre Cerda',
        sectors: ['Pedro Aguirre Cerda', 'PAC', 'San Miguel']
      },
      {
        id: 'lo-espejo',
        name: 'Lo Espejo',
        sectors: ['Lo Espejo', 'Gran Avenida', 'El Bosque']
      },
      {
        id: 'la-pintana',
        name: 'La Pintana',
        sectors: ['La Pintana', 'San Rafael', 'El Castillo']
      },
      {
        id: 'san-ramon',
        name: 'San Ramón',
        sectors: ['San Ramón', 'La Pintana', 'Santa Rosa']
      },
      {
        id: 'la-granja',
        name: 'La Granja',
        sectors: ['La Granja', 'San Ramón', 'Observatorio']
      },
      {
        id: 'colina',
        name: 'Colina',
        sectors: ['Colina', 'Chicureo', 'Lampa']
      },
      {
        id: 'lampa',
        name: 'Lampa',
        sectors: ['Lampa', 'Batuco', 'Colina']
      },
      {
        id: 'tiltil',
        name: 'Tiltil',
        sectors: ['Tiltil', 'Rungue', 'Polpaico']
      },
      {
        id: 'melipilla',
        name: 'Melipilla',
        sectors: ['Melipilla', 'Pomaire', 'San Pedro']
      },
      {
        id: 'alhue',
        name: 'Alhué',
        sectors: ['Alhué', 'Melipilla', 'María Pinto']
      },
      {
        id: 'curacavi',
        name: 'Curacaví',
        sectors: ['Curacaví', 'Melipilla', 'Lampa']
      },
      {
        id: 'maria-pinto',
        name: 'María Pinto',
        sectors: ['María Pinto', 'Melipilla', 'Curacaví']
      },
      {
        id: 'san-pedro',
        name: 'San Pedro',
        sectors: ['San Pedro', 'Melipilla', 'Alhué']
      },
      {
        id: 'talagante',
        name: 'Talagante',
        sectors: ['Talagante', 'Peñaflor', 'El Monte']
      },
      {
        id: 'peñaflor',
        name: 'Peñaflor',
        sectors: ['Peñaflor', 'Talagante', 'Malloco']
      },
      {
        id: 'el-monte',
        name: 'El Monte',
        sectors: ['El Monte', 'Talagante', 'Melipilla']
      },
      {
        id: 'isla-de-maipo',
        name: 'Isla de Maipo',
        sectors: ['Isla de Maipo', 'Talagante', 'Peñaflor']
      },
      {
        id: 'padre-hurtado',
        name: 'Padre Hurtado',
        sectors: ['Padre Hurtado', 'Peñaflor', 'Talagante']
      }
    ]
  },
  {
    id: 'ohiggins',
    name: "O'Higgins",
    communes: [
      {
        id: 'rancagua',
        name: 'Rancagua',
        sectors: ['Centro', 'Norte', 'Poniente', 'Oriente', 'Sur']
      },
      {
        id: 'codegua',
        name: 'Codegua',
        sectors: ['Codegua', 'Rancagua', 'Graneros']
      },
      {
        id: 'coinco',
        name: 'Coinco',
        sectors: ['Coinco', 'Doñihue', 'Coltauco']
      },
      {
        id: 'coltauco',
        name: 'Coltauco',
        sectors: ['Coltauco', 'Coinco', 'Doñihue']
      },
      {
        id: 'doñihue',
        name: 'Doñihue',
        sectors: ['Doñihue', 'Coinco', 'Coltauco']
      },
      {
        id: 'graneros',
        name: 'Graneros',
        sectors: ['Graneros', 'Codegua', 'Rancagua']
      },
      {
        id: 'las-cabras',
        name: 'Las Cabras',
        sectors: ['Las Cabras', 'Peumo', 'Pichidegua']
      },
      {
        id: 'machali',
        name: 'Machalí',
        sectors: ['Machalí', 'Rancagua', 'Coya']
      },
      {
        id: 'malloa',
        name: 'Malloa',
        sectors: ['Malloa', 'Pelequén', 'Rengo']
      },
      {
        id: 'mostazal',
        name: 'Mostazal',
        sectors: ['Mostazal', 'Graneros', 'Codegua']
      },
      {
        id: 'olivar',
        name: 'Olivar',
        sectors: ['Olivar', 'Rancagua', 'Machalí']
      },
      {
        id: 'peumo',
        name: 'Peumo',
        sectors: ['Peumo', 'Las Cabras', 'Pichidegua']
      },
      {
        id: 'pichidegua',
        name: 'Pichidegua',
        sectors: ['Pichidegua', 'Peumo', 'San Vicente']
      },
      {
        id: 'quinta-de-tilcoco',
        name: 'Quinta de Tilcoco',
        sectors: ['Quinta de Tilcoco', 'Malloa', 'Rengo']
      },
      {
        id: 'rengo',
        name: 'Rengo',
        sectors: ['Rengo', 'Malloa', 'Quinta de Tilcoco']
      },
      {
        id: 'requinoa',
        name: 'Requínoa',
        sectors: ['Requínoa', 'Rengo', 'Rancagua']
      },
      {
        id: 'san-vicente',
        name: 'San Vicente',
        sectors: ['San Vicente', 'Pichidegua', 'Peumo']
      },
      {
        id: 'pichilemu',
        name: 'Pichilemu',
        sectors: ['Pichilemu', 'Bucalemu', 'Cahuil']
      },
      {
        id: 'la-estrella',
        name: 'La Estrella',
        sectors: ['La Estrella', 'Litueche', 'Marchigüe']
      },
      {
        id: 'litueche',
        name: 'Litueche',
        sectors: ['Litueche', 'La Estrella', 'Navidad']
      },
      {
        id: 'marchigue',
        name: 'Marchigüe',
        sectors: ['Marchigüe', 'La Estrella', 'Peralillo']
      },
      {
        id: 'navidad',
        name: 'Navidad',
        sectors: ['Navidad', 'Litueche', 'Matanzas']
      },
      {
        id: 'paredones',
        name: 'Paredones',
        sectors: ['Paredones', 'Navidad', 'Bucalemu']
      },
      {
        id: 'san-fernando',
        name: 'San Fernando',
        sectors: ['San Fernando', 'Chimbarongo', 'Placilla']
      },
      {
        id: 'chepica',
        name: 'Chépica',
        sectors: ['Chépica', 'Santa Cruz', 'Nancagua']
      },
      {
        id: 'chimbarongo',
        name: 'Chimbarongo',
        sectors: ['Chimbarongo', 'San Fernando', 'Nancagua']
      },
      {
        id: 'lolol',
        name: 'Lolol',
        sectors: ['Lolol', 'Pumanque', 'Palmilla']
      },
      {
        id: 'nancagua',
        name: 'Nancagua',
        sectors: ['Nancagua', 'Chépica', 'Chimbarongo']
      },
      {
        id: 'palmilla',
        name: 'Palmilla',
        sectors: ['Palmilla', 'Peralillo', 'Lolol']
      },
      {
        id: 'peralillo',
        name: 'Peralillo',
        sectors: ['Peralillo', 'Palmilla', 'Marchigüe']
      },
      {
        id: 'placilla',
        name: 'Placilla',
        sectors: ['Placilla', 'San Fernando', 'Nancagua']
      },
      {
        id: 'pumanque',
        name: 'Pumanque',
        sectors: ['Pumanque', 'Lolol', 'Palmilla']
      },
      {
        id: 'santa-cruz',
        name: 'Santa Cruz',
        sectors: ['Santa Cruz', 'Chépica', 'Lolol']
      }
    ]
  },
  {
    id: 'maule',
    name: 'Maule',
    communes: [
      {
        id: 'talca',
        name: 'Talca',
        sectors: ['Centro', 'Norte', 'Oriente', 'Poniente', 'Sur']
      },
      {
        id: 'constitucion',
        name: 'Constitución',
        sectors: ['Constitución', 'Empedrado', 'Chanco']
      },
      {
        id: 'curepto',
        name: 'Curepto',
        sectors: ['Curepto', 'Constitución', 'Pencahue']
      },
      {
        id: 'empedrado',
        name: 'Empedrado',
        sectors: ['Empedrado', 'Constitución', 'Maule']
      },
      {
        id: 'maule',
        name: 'Maule',
        sectors: ['Maule', 'Empedrado', 'Talca']
      },
      {
        id: 'pelarco',
        name: 'Pelarco',
        sectors: ['Pelarco', 'Talca', 'Río Claro']
      },
      {
        id: 'pencahue',
        name: 'Pencahue',
        sectors: ['Pencahue', 'Curepto', 'Maule']
      },
      {
        id: 'rio-claro',
        name: 'Río Claro',
        sectors: ['Río Claro', 'Pelarco', 'Talca']
      },
      {
        id: 'san-clemente',
        name: 'San Clemente',
        sectors: ['San Clemente', 'Talca', 'Maule']
      },
      {
        id: 'san-rafael',
        name: 'San Rafael',
        sectors: ['San Rafael', 'Talca', 'Pelarco']
      },
      {
        id: 'cauquenes',
        name: 'Cauquenes',
        sectors: ['Cauquenes', 'Chanco', 'Pelluhue']
      },
      {
        id: 'chanco',
        name: 'Chanco',
        sectors: ['Chanco', 'Cauquenes', 'Pelluhue']
      },
      {
        id: 'pelluhue',
        name: 'Pelluhue',
        sectors: ['Pelluhue', 'Chanco', 'Cauquenes']
      },
      {
        id: 'curico',
        name: 'Curicó',
        sectors: ['Curicó', 'Teno', 'Romeral']
      },
      {
        id: 'hualañe',
        name: 'Hualañé',
        sectors: ['Hualañé', 'Curicó', 'Licantén']
      },
      {
        id: 'licanten',
        name: 'Licantén',
        sectors: ['Licantén', 'Hualañé', 'Vichuquén']
      },
      {
        id: 'molina',
        name: 'Molina',
        sectors: ['Molina', 'Curicó', 'Romeral']
      },
      {
        id: 'rauco',
        name: 'Rauco',
        sectors: ['Rauco', 'Curicó', 'Teno']
      },
      {
        id: 'romeral',
        name: 'Romeral',
        sectors: ['Romeral', 'Curicó', 'Molina']
      },
      {
        id: 'sagrada-familia',
        name: 'Sagrada Familia',
        sectors: ['Sagrada Familia', 'Curicó', 'Teno']
      },
      {
        id: 'teno',
        name: 'Teno',
        sectors: ['Teno', 'Curicó', 'Rauco']
      },
      {
        id: 'vichuquen',
        name: 'Vichuquén',
        sectors: ['Vichuquén', 'Licantén', 'Hualañé']
      },
      {
        id: 'linares',
        name: 'Linares',
        sectors: ['Linares', 'Yerbas Buenas', 'Longaví']
      },
      {
        id: 'colbun',
        name: 'Colbún',
        sectors: ['Colbún', 'Linares', 'Yerbas Buenas']
      },
      {
        id: 'longavi',
        name: 'Longaví',
        sectors: ['Longaví', 'Linares', 'Parral']
      },
      {
        id: 'parral',
        name: 'Parral',
        sectors: ['Parral', 'Longaví', 'Retiro']
      },
      {
        id: 'retiro',
        name: 'Retiro',
        sectors: ['Retiro', 'Parral', 'Longaví']
      },
      {
        id: 'san-javier',
        name: 'San Javier',
        sectors: ['San Javier', 'Villa Alegre', 'Yerbas Buenas']
      },
      {
        id: 'villa-alegre',
        name: 'Villa Alegre',
        sectors: ['Villa Alegre', 'San Javier', 'Yerbas Buenas']
      },
      {
        id: 'yerbas-buenas',
        name: 'Yerbas Buenas',
        sectors: ['Yerbas Buenas', 'Linares', 'San Javier']
      }
    ]
  },
  {
    id: 'ñuble',
    name: 'Ñuble',
    communes: [
      {
        id: 'chillan',
        name: 'Chillán',
        sectors: ['Centro', 'Norte', 'Oriente', 'Poniente', 'Sur']
      },
      {
        id: 'bulnes',
        name: 'Bulnes',
        sectors: ['Bulnes', 'Chillán', 'Quillón']
      },
      {
        id: 'cobquecura',
        name: 'Cobquecura',
        sectors: ['Cobquecura', 'Quirihue', 'Trehuaco']
      },
      {
        id: 'coelemu',
        name: 'Coelemu',
        sectors: ['Coelemu', 'Portezuelo', 'Quirihue']
      },
      {
        id: 'coihueco',
        name: 'Coihueco',
        sectors: ['Coihueco', 'Chillán', 'Pinto']
      },
      {
        id: 'chillan-viejo',
        name: 'Chillán Viejo',
        sectors: ['Chillán Viejo', 'Chillán', 'Pemuco']
      },
      {
        id: 'el-carmen',
        name: 'El Carmen',
        sectors: ['El Carmen', 'Chillán', 'Pemuco']
      },
      {
        id: 'ninhue',
        name: 'Ninhue',
        sectors: ['Ninhue', 'Quirihue', 'Portezuelo']
      },
      {
        id: 'ñiquen',
        name: 'Ñiquén',
        sectors: ['Ñiquén', 'Chillán', 'San Carlos']
      },
      {
        id: 'pemuco',
        name: 'Pemuco',
        sectors: ['Pemuco', 'El Carmen', 'Chillán Viejo']
      },
      {
        id: 'pinto',
        name: 'Pinto',
        sectors: ['Pinto', 'Coihueco', 'El Carmen']
      },
      {
        id: 'portezuelo',
        name: 'Portezuelo',
        sectors: ['Portezuelo', 'Coelemu', 'Ninhue']
      },
      {
        id: 'quillen',
        name: 'Quillón',
        sectors: ['Quillón', 'Bulnes', 'Chillán']
      },
      {
        id: 'quirihue',
        name: 'Quirihue',
        sectors: ['Quirihue', 'Cobquecura', 'Ninhue']
      },
      {
        id: 'ranquil',
        name: 'Ranquil',
        sectors: ['Ranquil', 'Quirihue', 'Coelemu']
      },
      {
        id: 'san-carlos',
        name: 'San Carlos',
        sectors: ['San Carlos', 'Ñiquén', 'Chillán']
      },
      {
        id: 'san-fabian',
        name: 'San Fabián',
        sectors: ['San Fabián', 'San Carlos', 'Ñiquén']
      },
      {
        id: 'san-ignacio',
        name: 'San Ignacio',
        sectors: ['San Ignacio', 'San Carlos', 'El Carmen']
      },
      {
        id: 'san-nicolas',
        name: 'San Nicolás',
        sectors: ['San Nicolás', 'San Carlos', 'Chillán']
      },
      {
        id: 'trehuaco',
        name: 'Trehuaco',
        sectors: ['Trehuaco', 'Cobquecura', 'Quirihue']
      },
      {
        id: 'yungay',
        name: 'Yungay',
        sectors: ['Yungay', 'Pemuco', 'El Carmen']
      }
    ]
  },
  {
    id: 'biobio',
    name: 'Biobío',
    communes: [
      {
        id: 'concepcion',
        name: 'Concepción',
        sectors: ['Centro', 'Universidad', 'Pedro de Valdivia', 'Collao', 'Paicaví']
      },
      {
        id: 'coronel',
        name: 'Coronel',
        sectors: ['Coronel', 'Schwager', 'Playa Negra']
      },
      {
        id: 'chiguayante',
        name: 'Chiguayante',
        sectors: ['Chiguayante', 'Leonera', 'Manquimávida']
      },
      {
        id: 'florida',
        name: 'Florida',
        sectors: ['Florida', 'Hualqui', 'Santa Juana']
      },
      {
        id: 'hualqui',
        name: 'Hualqui',
        sectors: ['Hualqui', 'Florida', 'Santa Juana']
      },
      {
        id: 'lota',
        name: 'Lota',
        sectors: ['Lota', 'Colcura', 'Laraquete']
      },
      {
        id: 'penco',
        name: 'Penco',
        sectors: ['Penco', 'Lirquén', 'Cosmito']
      },
      {
        id: 'san-pedro-de-la-paz',
        name: 'San Pedro de la Paz',
        sectors: ['San Pedro de la Paz', 'Hualpén', 'Michaihue']
      },
      {
        id: 'santa-juana',
        name: 'Santa Juana',
        sectors: ['Santa Juana', 'Hualqui', 'Florida']
      },
      {
        id: 'talcahuano',
        name: 'Talcahuano',
        sectors: ['Talcahuano', 'Las Higueras', 'Gaete']
      },
      {
        id: 'tome',
        name: 'Tomé',
        sectors: ['Tomé', 'Dichato', 'Cocholgüe']
      },
      {
        id: 'hualpen',
        name: 'Hualpén',
        sectors: ['Hualpén', 'San Pedro de la Paz', 'Talcahuano']
      },
      {
        id: 'lebu',
        name: 'Lebu',
        sectors: ['Lebu', 'Los Álamos', 'Arauco']
      },
      {
        id: 'arauco',
        name: 'Arauco',
        sectors: ['Arauco', 'Lebu', 'Curanilahue']
      },
      {
        id: 'cañete',
        name: 'Cañete',
        sectors: ['Cañete', 'Contulmo', 'Tirúa']
      },
      {
        id: 'contulmo',
        name: 'Contulmo',
        sectors: ['Contulmo', 'Cañete', 'Purén']
      },
      {
        id: 'curanilahue',
        name: 'Curanilahue',
        sectors: ['Curanilahue', 'Arauco', 'Los Álamos']
      },
      {
        id: 'los-alamos',
        name: 'Los Álamos',
        sectors: ['Los Álamos', 'Lebu', 'Curanilahue']
      },
      {
        id: 'tirua',
        name: 'Tirúa',
        sectors: ['Tirúa', 'Cañete', 'Lumaco']
      },
      {
        id: 'los-angeles',
        name: 'Los Ángeles',
        sectors: ['Los Ángeles', 'Nacimiento', 'Laja']
      },
      {
        id: 'antuco',
        name: 'Antuco',
        sectors: ['Antuco', 'Los Ángeles', 'Quilaco']
      },
      {
        id: 'cabrero',
        name: 'Cabrero',
        sectors: ['Cabrero', 'Yumbel', 'Monte Águila']
      },
      {
        id: 'laja',
        name: 'Laja',
        sectors: ['Laja', 'Los Ángeles', 'Nacimiento']
      },
      {
        id: 'mulchen',
        name: 'Mulchén',
        sectors: ['Mulchén', 'Negrete', 'Nacimiento']
      },
      {
        id: 'nacimiento',
        name: 'Nacimiento',
        sectors: ['Nacimiento', 'Laja', 'Mulchén']
      },
      {
        id: 'negrete',
        name: 'Negrete',
        sectors: ['Negrete', 'Mulchén', 'Nacimiento']
      },
      {
        id: 'quilaco',
        name: 'Quilaco',
        sectors: ['Quilaco', 'Antuco', 'Santa Bárbara']
      },
      {
        id: 'quilleco',
        name: 'Quilleco',
        sectors: ['Quilleco', 'Los Ángeles', 'Santa Bárbara']
      },
      {
        id: 'san-rosendo',
        name: 'San Rosendo',
        sectors: ['San Rosendo', 'Laja', 'Yumbel']
      },
      {
        id: 'santa-barbara',
        name: 'Santa Bárbara',
        sectors: ['Santa Bárbara', 'Quilaco', 'Quilleco']
      },
      {
        id: 'tucapel',
        name: 'Tucapel',
        sectors: ['Tucapel', 'Antuco', 'Santa Bárbara']
      },
      {
        id: 'yumbel',
        name: 'Yumbel',
        sectors: ['Yumbel', 'Cabrero', 'San Rosendo']
      },
      {
        id: 'alto-biobio',
        name: 'Alto Biobío',
        sectors: ['Alto Biobío', 'Santa Bárbara', 'Lonquimay']
      }
    ]
  },
  {
    id: 'araucania',
    name: 'Araucanía',
    communes: [
      {
        id: 'temuco',
        name: 'Temuco',
        sectors: ['Centro', 'Universidad', 'Pedro de Valdivia', 'Pueblo Nuevo', 'Labranza']
      },
      {
        id: 'carahue',
        name: 'Carahue',
        sectors: ['Carahue', 'Nehuentúe', 'Trovolhue']
      },
      {
        id: 'cunco',
        name: 'Cunco',
        sectors: ['Cunco', 'Melipeuco', 'Vilcún']
      },
      {
        id: 'curarrehue',
        name: 'Curarrehue',
        sectors: ['Curarrehue', 'Pucón', 'Reigolil']
      },
      {
        id: 'freire',
        name: 'Freire',
        sectors: ['Freire', 'Pitrufquén', 'Temuco']
      },
      {
        id: 'galvarino',
        name: 'Galvarino',
        sectors: ['Galvarino', 'Lautaro', 'Perquenco']
      },
      {
        id: 'gorbea',
        name: 'Gorbea',
        sectors: ['Gorbea', 'Loncoche', 'Pitrufquén']
      },
      {
        id: 'lautaro',
        name: 'Lautaro',
        sectors: ['Lautaro', 'Galvarino', 'Perquenco']
      },
      {
        id: 'loncoche',
        name: 'Loncoche',
        sectors: ['Loncoche', 'Gorbea', 'Villarrica']
      },
      {
        id: 'melipeuco',
        name: 'Melipeuco',
        sectors: ['Melipeuco', 'Cunco', 'Curarrehue']
      },
      {
        id: 'nueva-imperial',
        name: 'Nueva Imperial',
        sectors: ['Nueva Imperial', 'Carahue', 'Temuco']
      },
      {
        id: 'padre-las-casas',
        name: 'Padre Las Casas',
        sectors: ['Padre Las Casas', 'Temuco', 'Freire']
      },
      {
        id: 'perquenco',
        name: 'Perquenco',
        sectors: ['Perquenco', 'Lautaro', 'Galvarino']
      },
      {
        id: 'pitrufquen',
        name: 'Pitrufquén',
        sectors: ['Pitrufquén', 'Freire', 'Gorbea']
      },
      {
        id: 'pucon',
        name: 'Pucón',
        sectors: ['Pucón', 'Villarrica', 'Curarrehue']
      },
      {
        id: 'saavedra',
        name: 'Saavedra',
        sectors: ['Saavedra', 'Carahue', 'Teodoro Schmidt']
      },
      {
        id: 'teodoro-schmidt',
        name: 'Teodoro Schmidt',
        sectors: ['Teodoro Schmidt', 'Saavedra', 'Nueva Imperial']
      },
      {
        id: 'tolten',
        name: 'Toltén',
        sectors: ['Toltén', 'Pitrufquén', 'Teodoro Schmidt']
      },
      {
        id: 'vilcun',
        name: 'Vilcún',
        sectors: ['Vilcún', 'Cunco', 'Lautaro']
      },
      {
        id: 'villarrica',
        name: 'Villarrica',
        sectors: ['Villarrica', 'Pucón', 'Loncoche']
      },
      {
        id: 'cholchol',
        name: 'Cholchol',
        sectors: ['Cholchol', 'Nueva Imperial', 'Temuco']
      },
      {
        id: 'angol',
        name: 'Angol',
        sectors: ['Angol', 'Renaico', 'Collipulli']
      },
      {
        id: 'collipulli',
        name: 'Collipulli',
        sectors: ['Collipulli', 'Angol', 'Ercilla']
      },
      {
        id: 'curacautin',
        name: 'Curacautín',
        sectors: ['Curacautín', 'Lonquimay', 'Victoria']
      },
      {
        id: 'ercilla',
        name: 'Ercilla',
        sectors: ['Ercilla', 'Collipulli', 'Lumaco']
      },
      {
        id: 'lonquimay',
        name: 'Lonquimay',
        sectors: ['Lonquimay', 'Curacautín', 'Melipeuco']
      },
      {
        id: 'los-sauces',
        name: 'Los Sauces',
        sectors: ['Los Sauces', 'Lumaco', 'Purén']
      },
      {
        id: 'lumaco',
        name: 'Lumaco',
        sectors: ['Lumaco', 'Ercilla', 'Los Sauces']
      },
      {
        id: 'puren',
        name: 'Purén',
        sectors: ['Purén', 'Los Sauces', 'Lumaco']
      },
      {
        id: 'renaico',
        name: 'Renaico',
        sectors: ['Renaico', 'Angol', 'Collipulli']
      },
      {
        id: 'traiguen',
        name: 'Traiguén',
        sectors: ['Traiguén', 'Lumaco', 'Victoria']
      },
      {
        id: 'victoria',
        name: 'Victoria',
        sectors: ['Victoria', 'Traiguén', 'Curacautín']
      }
    ]
  },
  {
    id: 'los-rios',
    name: 'Los Ríos',
    communes: [
      {
        id: 'valdivia',
        name: 'Valdivia',
        sectors: ['Centro', 'Isla Teja', 'Las Animas', 'Collico', 'Niebla']
      },
      {
        id: 'corral',
        name: 'Corral',
        sectors: ['Corral', 'Chaihuin', 'San Carlos']
      },
      {
        id: 'lanco',
        name: 'Lanco',
        sectors: ['Lanco', 'Malalhue', 'Panguipulli']
      },
      {
        id: 'los-lagos',
        name: 'Los Lagos',
        sectors: ['Los Lagos', 'Antilhue', 'Valdivia']
      },
      {
        id: 'mafil',
        name: 'Máfil',
        sectors: ['Máfil', 'Los Lagos', 'Valdivia']
      },
      {
        id: 'mariquina',
        name: 'Mariquina',
        sectors: ['Mariquina', 'Valdivia', 'Lanco']
      },
      {
        id: 'paillaco',
        name: 'Paillaco',
        sectors: ['Paillaco', 'Los Lagos', 'Máfil']
      },
      {
        id: 'panguipulli',
        name: 'Panguipulli',
        sectors: ['Panguipulli', 'Lanco', 'Liquiñe']
      },
      {
        id: 'la-union',
        name: 'La Unión',
        sectors: ['La Unión', 'Río Bueno', 'Lago Ranco']
      },
      {
        id: 'futrono',
        name: 'Futrono',
        sectors: ['Futrono', 'Lago Ranco', 'Llifén']
      },
      {
        id: 'lago-ranco',
        name: 'Lago Ranco',
        sectors: ['Lago Ranco', 'Futrono', 'La Unión']
      },
      {
        id: 'rio-bueno',
        name: 'Río Bueno',
        sectors: ['Río Bueno', 'La Unión', 'Lago Ranco']
      }
    ]
  },
  {
    id: 'los-lagos',
    name: 'Los Lagos',
    communes: [
      {
        id: 'puerto-montt',
        name: 'Puerto Montt',
        sectors: ['Centro', 'Pelluco', 'Alerce', 'Mirasol', 'Chamiza']
      },
      {
        id: 'calbuco',
        name: 'Calbuco',
        sectors: ['Calbuco', 'Carelmapu', 'Huar']
      },
      {
        id: 'cochamó',
        name: 'Cochamó',
        sectors: ['Cochamó', 'Puelo', 'Río Puelo']
      },
      {
        id: 'fresia',
        name: 'Fresia',
        sectors: ['Fresia', 'Puyehue', 'Llanquihue']
      },
      {
        id: 'frutillar',
        name: 'Frutillar',
        sectors: ['Frutillar', 'Llanquihue', 'Puerto Octay']
      },
      {
        id: 'los-muermos',
        name: 'Los Muermos',
        sectors: ['Los Muermos', 'Maullín', 'Fresia']
      },
      {
        id: 'llanquihue',
        name: 'Llanquihue',
        sectors: ['Llanquihue', 'Frutillar', 'Puerto Octay']
      },
      {
        id: 'maullin',
        name: 'Maullín',
        sectors: ['Maullín', 'Los Muermos', 'Calbuco']
      },
      {
        id: 'puerto-octay',
        name: 'Puerto Octay',
        sectors: ['Puerto Octay', 'Frutillar', 'Puyehue']
      },
      {
        id: 'puerto-varas',
        name: 'Puerto Varas',
        sectors: ['Puerto Varas', 'Llanquihue', 'Puerto Montt']
      },
      {
        id: 'puyehue',
        name: 'Puyehue',
        sectors: ['Puyehue', 'Puerto Octay', 'Fresia']
      },
      {
        id: 'osorno',
        name: 'Osorno',
        sectors: ['Centro', 'Rahue', 'Francke', 'Ovejería', 'Chuyaca']
      },
      {
        id: 'puerto-octay',
        name: 'Puerto Octay',
        sectors: ['Puerto Octay', 'Frutillar', 'Osorno']
      },
      {
        id: 'purranque',
        name: 'Purranque',
        sectors: ['Purranque', 'Osorno', 'Río Negro']
      },
      {
        id: 'puyehue',
        name: 'Puyehue',
        sectors: ['Puyehue', 'Osorno', 'Entre Lagos']
      },
      {
        id: 'rio-negro',
        name: 'Río Negro',
        sectors: ['Río Negro', 'Purranque', 'San Pablo']
      },
      {
        id: 'san-juan-de-la-costa',
        name: 'San Juan de la Costa',
        sectors: ['San Juan de la Costa', 'Osorno', 'Purranque']
      },
      {
        id: 'san-pablo',
        name: 'San Pablo',
        sectors: ['San Pablo', 'Río Negro', 'Purranque']
      },
      {
        id: 'castro',
        name: 'Castro',
        sectors: ['Castro', 'Chonchi', 'Dalcahue']
      },
      {
        id: 'ancud',
        name: 'Ancud',
        sectors: ['Ancud', 'Quemchi', 'Dalcahue']
      },
      {
        id: 'chonchi',
        name: 'Chonchi',
        sectors: ['Chonchi', 'Castro', 'Puqueldón']
      },
      {
        id: 'curaco-de-velez',
        name: 'Curaco de Vélez',
        sectors: ['Curaco de Vélez', 'Quinchao', 'Puqueldón']
      },
      {
        id: 'dalcahue',
        name: 'Dalcahue',
        sectors: ['Dalcahue', 'Castro', 'Ancud']
      },
      {
        id: 'puqueldon',
        name: 'Puqueldón',
        sectors: ['Puqueldón', 'Chonchi', 'Curaco de Vélez']
      },
      {
        id: 'quellon',
        name: 'Quellón',
        sectors: ['Quellón', 'Chonchi', 'Tranqui']
      },
      {
        id: 'quemchi',
        name: 'Quemchi',
        sectors: ['Quemchi', 'Ancud', 'Dalcahue']
      },
      {
        id: 'quinchao',
        name: 'Quinchao',
        sectors: ['Quinchao', 'Curaco de Vélez', 'Dalcahue']
      },
      {
        id: 'chaiten',
        name: 'Chaitén',
        sectors: ['Chaitén', 'Futaleufú', 'Hualaihué']
      },
      {
        id: 'futaleufu',
        name: 'Futaleufú',
        sectors: ['Futaleufú', 'Chaitén', 'Palena']
      },
      {
        id: 'hualaihue',
        name: 'Hualaihué',
        sectors: ['Hualaihué', 'Chaitén', 'Cochamó']
      },
      {
        id: 'palena',
        name: 'Palena',
        sectors: ['Palena', 'Futaleufú', 'Chaitén']
      }
    ]
  },
  {
    id: 'aysen',
    name: 'Aysén',
    communes: [
      {
        id: 'coyhaique',
        name: 'Coyhaique',
        sectors: ['Coyhaique', 'Baquedano', 'Condell', 'Prat']
      },
      {
        id: 'lago-verde',
        name: 'Lago Verde',
        sectors: ['Lago Verde', 'Villa O\'Higgins', 'Río Tranquilo']
      },
      {
        id: 'aysen',
        name: 'Aysén',
        sectors: ['Aysén', 'Puerto Aysén', 'Villa Mañihuales']
      },
      {
        id: 'cisnes',
        name: 'Cisnes',
        sectors: ['Cisnes', 'Puerto Cisnes', 'Lago Verde']
      },
      {
        id: 'guaitecas',
        name: 'Guaitecas',
        sectors: ['Guaitecas', 'Melinka', 'Repollal']
      },
      {
        id: 'cochrane',
        name: 'Cochrane',
        sectors: ['Cochrane', 'Puerto Guadal', 'Villa O\'Higgins']
      },
      {
        id: 'ohiggins',
        name: 'O\'Higgins',
        sectors: ['Villa O\'Higgins', 'Candelario Mancilla', 'Cochrane']
      },
      {
        id: 'tortel',
        name: 'Tortel',
        sectors: ['Tortel', 'Caleta Tortel', 'Puerto Edén']
      },
      {
        id: 'chile-chico',
        name: 'Chile Chico',
        sectors: ['Chile Chico', 'Puerto Guadal', 'Río Ibáñez']
      },
      {
        id: 'río-ibañez',
        name: 'Río Ibáñez',
        sectors: ['Río Ibáñez', 'Chile Chico', 'Puerto Guadal']
      }
    ]
  },
  {
    id: 'magallanes',
    name: 'Magallanes',
    communes: [
      {
        id: 'punta-arenas',
        name: 'Punta Arenas',
        sectors: ['Centro', 'Zona Norte', 'Zona Sur', 'Río Seco', 'Bahía Catalina']
      },
      {
        id: 'laguna-blanca',
        name: 'Laguna Blanca',
        sectors: ['Laguna Blanca', 'Villa Tehuelches', 'Río Verde']
      },
      {
        id: 'rio-verde',
        name: 'Río Verde',
        sectors: ['Río Verde', 'Laguna Blanca', 'Punta Arenas']
      },
      {
        id: 'san-gregorio',
        name: 'San Gregorio',
        sectors: ['San Gregorio', 'Punta Arenas', 'Río Verde']
      },
      {
        id: 'cabo-de-hornos',
        name: 'Cabo de Hornos',
        sectors: ['Puerto Williams', 'Navarino', 'Cabo de Hornos']
      },
      {
        id: 'antartica',
        name: 'Antártica',
        sectors: ['Base Antártica', 'Puerto Williams', 'Villa Las Estrellas']
      },
      {
        id: 'porvenir',
        name: 'Porvenir',
        sectors: ['Porvenir', 'Cerro Sombrero', 'Onaisin']
      },
      {
        id: 'primavera',
        name: 'Primavera',
        sectors: ['Primavera', 'Porvenir', 'Cerro Sombrero']
      },
      {
        id: 'timaukel',
        name: 'Timaukel',
        sectors: ['Timaukel', 'Cameron', 'Cerro Sombrero']
      },
      {
        id: 'natales',
        name: 'Natales',
        sectors: ['Puerto Natales', 'Cerro Castillo', 'Villa Dorotea']
      },
      {
        id: 'torres-del-paine',
        name: 'Torres del Paine',
        sectors: ['Torres del Paine', 'Cerro Castillo', 'Puerto Natales']
      }
    ]
  }
];