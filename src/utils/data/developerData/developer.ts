export interface Location {
  country: string;
  city: string;
}

export interface PersonalInfo {
  profileImage: string;
  name: string;
  location: Location;
  aboutMe: string[];
}

export interface price {
  min: number;
  max: number;
}

export interface services {
  id: number;
  type: string;
  nameService: string;
  priceService: price;
  description: string;
}

export interface ProfessionalInfo {
  category: string;
  rate1: { min: number; max: number };
  title: string;
  skills: {name: string; percent: number}[];
  availability: string;
}

export interface Rating {
  rate: number;
  review: number;
}

export interface StatsInfo {
  rating: Rating;
  likes: number;
}

export interface Developer {
  devId: number;
  id: string;
  personal: PersonalInfo;
  professional: ProfessionalInfo;
  stats: StatsInfo;
  services: services[]
}
