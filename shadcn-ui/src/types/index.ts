export interface HairColorOption {
  name: string;
  displayName: string;
  hexCode: string;
  imageUrl?: string;
}

export interface PriceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  tubeCount: number;
  isDefault?: boolean;
  isDiscounted?: boolean;
  discountNote?: string;
}

export interface FormData {
  name: string;
  phone: string;
  address: string;
  colorChoice: string;
  packageOption: string;
  orderDate: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  colorUsed?: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}