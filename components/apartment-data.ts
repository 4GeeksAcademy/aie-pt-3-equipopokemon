// Categorías disponibles para filtrar apartamentos en el catálogo.
export type ApartmentCategory = "Playa" | "Centro" | "Montana" | "Diseno";

// Representa cada servicio visible en la grilla del detalle.
export type ApartmentAmenity = {
  icon: string;
  label: string;
};

// Información mínima del anfitrión para la sección de perfil.
export type ApartmentHost = {
  name: string;
  yearsHosting: number;
  avatarLabel: string;
};

// Modelo único reutilizado por listado y página de detalle.
export type Apartment = {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  photos?: string[];
  nights: number;
  pricePerNight: number;
  rating: number;
  reviews: number;
  guests: number;
  minGuests?: number;
  maxGuests?: number;
  type: ApartmentCategory;
  badge?: string;
  host?: ApartmentHost;
  amenities?: ApartmentAmenity[];
};

export const apartmentCategories: ApartmentCategory[] = ["Playa", "Centro", "Montana", "Diseno"];

// Fuente de datos mock centralizada para evitar duplicación entre pantallas.
export const apartments: Apartment[] = [
  {
    id: 1,
    title: "Loft panoramico con terraza privada",
    location: "Barcelona, El Born",
    description:
      "Espacio luminoso con cocina abierta, vistas a la ciudad y check-in autonomo.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Salon moderno con grandes ventanales y sofa beige",
    photos: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 4,
    pricePerNight: 185,
    rating: 4.91,
    reviews: 128,
    guests: 2,
    minGuests: 1,
    maxGuests: 4,
    type: "Centro",
    badge: "Favorito de huespedes",
    host: {
      name: "Claudia",
      yearsHosting: 6,
      avatarLabel: "C",
    },
    amenities: [
      { icon: "📶", label: "Wifi rapido" },
      { icon: "🍳", label: "Cocina equipada" },
      { icon: "🧺", label: "Lavadora" },
      { icon: "❄️", label: "Aire acondicionado" },
      { icon: "🛗", label: "Ascensor" },
      { icon: "🧴", label: "Amenidades premium" },
    ],
  },
  {
    id: 2,
    title: "Apartamento frente al mar con balcon",
    location: "Malaga, La Malagueta",
    description:
      "Distribucion abierta, tonos calidos y acceso caminando al paseo maritimo.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Apartamento con comedor, balcon y vista al mar",
    photos: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 6,
    pricePerNight: 230,
    rating: 4.88,
    reviews: 94,
    guests: 4,
    minGuests: 1,
    maxGuests: 5,
    type: "Playa",
    badge: "Superhost",
    host: {
      name: "Diego",
      yearsHosting: 8,
      avatarLabel: "D",
    },
    amenities: [
      { icon: "🌊", label: "Vista al mar" },
      { icon: "🅿️", label: "Parking" },
      { icon: "📺", label: "Smart TV" },
      { icon: "🛏️", label: "Ropa de cama" },
      { icon: "☕", label: "Cafetera" },
      { icon: "🧹", label: "Limpieza incluida" },
    ],
  },
  {
    id: 3,
    title: "Cabana de diseno entre pinos",
    location: "Navacerrada, Sierra",
    description:
      "Retiro tranquilo con chimenea, banera exenta y ventanales al bosque.",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Cabana de madera con ventanales rodeada de arboles",
    photos: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 3,
    pricePerNight: 160,
    rating: 4.97,
    reviews: 76,
    guests: 3,
    minGuests: 1,
    maxGuests: 4,
    type: "Montana",
    host: {
      name: "Nora",
      yearsHosting: 4,
      avatarLabel: "N",
    },
    amenities: [
      { icon: "🔥", label: "Chimenea" },
      { icon: "🌲", label: "Acceso a senderos" },
      { icon: "🛁", label: "Banera exenta" },
      { icon: "📚", label: "Rincon de lectura" },
      { icon: "🌙", label: "Blackout completo" },
      { icon: "🚿", label: "Ducha termica" },
    ],
  },
  {
    id: 4,
    title: "Suite creativa en edificio historico",
    location: "Valencia, Ruzafa",
    description:
      "Interiorismo editorial, zona de trabajo y acceso rapido a restaurantes y galerias.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dormitorio de diseno con texturas naturales y luz suave",
    photos: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 5,
    pricePerNight: 205,
    rating: 4.84,
    reviews: 63,
    guests: 2,
    minGuests: 1,
    maxGuests: 3,
    type: "Diseno",
    badge: "Nuevo",
    host: {
      name: "Lucia",
      yearsHosting: 5,
      avatarLabel: "L",
    },
    amenities: [
      { icon: "💻", label: "Espacio de trabajo" },
      { icon: "🎨", label: "Decoracion curada" },
      { icon: "🔐", label: "Check-in autonomo" },
      { icon: "📍", label: "Zona centrica" },
      { icon: "🛎️", label: "Soporte 24/7" },
      { icon: "🧳", label: "Consigna" },
    ],
  },
  {
    id: 5,
    title: "Casa mediterranea con patio y piscina",
    location: "Alicante, Altea",
    description:
      "Ambiente relajado, exterior privado y cocina familiar para estancias largas.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casa blanca mediterranea con piscina y tumbonas",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52cb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 7,
    pricePerNight: 320,
    rating: 4.95,
    reviews: 141,
    guests: 6,
    minGuests: 2,
    maxGuests: 8,
    type: "Playa",
    host: {
      name: "Marta",
      yearsHosting: 9,
      avatarLabel: "M",
    },
    amenities: [
      { icon: "🏊", label: "Piscina privada" },
      { icon: "🌴", label: "Patio exterior" },
      { icon: "🍽️", label: "Cocina familiar" },
      { icon: "🔥", label: "Barbacoa" },
      { icon: "🚗", label: "Garaje" },
      { icon: "🧒", label: "Apto familias" },
    ],
  },
  {
    id: 6,
    title: "Estudio minimalista cerca del casco antiguo",
    location: "Sevilla, Santa Cruz",
    description:
      "Base comoda para explorar la ciudad con almacenaje oculto y mucha luz natural.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Estudio minimalista con cama, escritorio y paredes claras",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=80",
    ],
    nights: 2,
    pricePerNight: 120,
    rating: 4.79,
    reviews: 52,
    guests: 2,
    minGuests: 1,
    maxGuests: 2,
    type: "Centro",
    host: {
      name: "Ivan",
      yearsHosting: 3,
      avatarLabel: "I",
    },
    amenities: [
      { icon: "📡", label: "Wifi estable" },
      { icon: "🚿", label: "Ducha amplia" },
      { icon: "🪟", label: "Luz natural" },
      { icon: "🗺️", label: "Guia local" },
      { icon: "🧠", label: "Espacio funcional" },
      { icon: "🚶", label: "Zona caminable" },
    ],
  },
];

// Helper para resolver un apartamento por id en la ruta dinámica /rooms/[id].
export function getRoomById(id: number): Apartment | undefined {
  return apartments.find((apartment) => apartment.id === id);
}

// Aliases de compatibilidad para archivos existentes que aún usan nomenclatura Room.
export type Room = Apartment;
export type RoomCategory = ApartmentCategory;
export type RoomAmenity = ApartmentAmenity;
export type RoomHost = ApartmentHost;
export const roomCategories = apartmentCategories;
export const rooms = apartments;
