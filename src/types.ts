export interface Silhouette {
  id: string;
  name: string;
  badge: string;
  price: string;
  image: string;
  hp: string;
  acceleration: string;
  seats: string;
}

export interface InventoryVehicle {
  id: string;
  year: number;
  name: string;
  category: 'sedans' | 'suvs' | 'trucks' | 'coupes' | 'hybrids';
  mileage: string;
  transmission: string;
  price: string;
  image: string;
  color: string;
  fuel: string;
  engine: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface AirportLocation {
  id: string;
  city: string;
  code: string;
  terminal: string;
  image: string;
  carsAvailable: number;
  open247: boolean;
}

export interface BookingSubmission {
  fullName: string;
  email: string;
  phone: string;
  vehicleClass: string;
  pickupDate: string;
  returnDate: string;
  isHuman: boolean;
}
