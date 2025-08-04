import { HairColorOption, PriceOption, Testimonial, Benefit, HowItWorksStep } from '@/types';

export const colorOptions: HairColorOption[] = [
  { 
    name: 'natural-black', 
    displayName: 'Natural Black', 
    hexCode: '#000000',
  },
  { 
    name: 'mocha-brown', 
    displayName: 'Mocha Brown', 
    hexCode: '#4A2C2A',
  },
  { 
    name: 'burgundy', 
    displayName: 'Burgundy', 
    hexCode: '#800020',
  },
  { 
    name: 'caramel-brown', 
    displayName: 'Caramel Brown', 
    hexCode: '#AF6E4D',
  },
  { 
    name: 'purple-gray', 
    displayName: 'Purple Gray', 
    hexCode: '#7B68EE',
  },
  { 
    name: 'milk-tea', 
    displayName: 'Milk Tea', 
    hexCode: '#C6A880',
  }
];

export const priceOptions: PriceOption[] = [
  {
    id: 'complete-treatment',
    name: 'Complete Treatment',
    description: 'Ideal for one full color treatment or long hair',
    price: 19500,
    tubeCount: 2,
    isDefault: true
  },
  {
    id: 'glow-share-combo',
    name: 'Glow & Share Combo',
    description: 'For thick hair, future use, or gifting to friends/siblings',
    price: 28500,
    discountedPrice: 26500,
    tubeCount: 3,
    isDiscounted: true,
    discountNote: 'Order within the next 24 hours and get ₦2,000 OFF'
  },
  {
    id: 'color-mix-bundle',
    name: 'Color Mix Bundle',
    description: 'Choose any 2 colors — for styling variety and flexibility',
    price: 38000,
    tubeCount: 4
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chinaza E.',
    location: 'Abuja, Nigeria',
    message: 'I used the Mocha Brown and I\'m shocked how soft my hair feels. My sister just ordered hers!',
    colorUsed: 'Mocha Brown'
  },
  {
    id: 2,
    name: 'Tolu A.',
    location: 'Lagos, Nigeria',
    message: 'Normally I get headaches when I dye my hair but this one was totally different. No itch, no smell. It\'s amazing!'
  },
  {
    id: 3,
    name: 'Miriam K.',
    location: 'Nairobi, Kenya',
    message: 'I went for the Milk Tea shade and the compliments haven\'t stopped. I\'m placing another order now before the discount ends.',
    colorUsed: 'Milk Tea'
  },
  {
    id: 4,
    name: 'Ama O.',
    location: 'Kumasi, Ghana',
    message: 'I\'ve never seen color take so evenly on my natural hair. It didn\'t dry out my scalp like other brands!'
  },
  {
    id: 5,
    name: 'Ngozi I.',
    location: 'Port Harcourt, Nigeria',
    message: 'Honestly, this is salon results at home. I\'m going for the 4-tube pack next to try more shades.'
  },
  {
    id: 6,
    name: 'Bola A.',
    location: 'Ibadan, Nigeria',
    message: 'I first bought 2 tubes but my cousin grabbed one. 😂 So now I buy the 3-tube combo and hide it!'
  },
  {
    id: 7,
    name: 'Becky M.',
    location: 'Mombasa, Kenya',
    message: 'I\'ve tried 3 brands before. This is the first that didn\'t damage my hairline. Highly recommend it!'
  },
  {
    id: 8,
    name: 'Hauwa B.',
    location: 'Kaduna, Nigeria',
    message: 'Fast delivery and great packaging. I even got free gloves. This product is too good to gatekeep!'
  }
];

export const benefits: Benefit[] = [
  {
    icon: 'shield-check',
    title: 'No scalp burns or irritation',
    description: 'Our gentle formula is free from ammonia and harsh chemicals that can irritate your scalp.'
  },
  {
    icon: 'paint-brush',
    title: 'Deep, rich color with natural oils',
    description: 'Enhanced with keratin and natural oils for vibrant, long-lasting color that nourishes your hair.'
  },
  {
    icon: 'home',
    title: 'Easy at-home use',
    description: 'Professional results in the comfort of your home with our simple application process.'
  },
  {
    icon: 'check-circle',
    title: 'Works on relaxed and natural hair',
    description: 'Specially formulated for all African hair types, whether relaxed or natural.'
  },
  {
    icon: 'calendar',
    title: 'Lasts up to 6 weeks',
    description: 'Enjoy vibrant color that resists fading for up to 6 weeks with proper care.'
  },
  {
    icon: 'sparkles',
    title: 'Salon-quality results',
    description: 'Achieve professional-looking results without the salon price tag.'
  }
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Choose your color',
    description: 'Select from our range of 6 vibrant, flattering shades designed for African hair.',
    icon: 'palette'
  },
  {
    step: 2,
    title: 'Mix and apply',
    description: 'Follow our simple instructions with the included gloves and application tools.',
    icon: 'mix'
  },
  {
    step: 3,
    title: 'Enjoy vibrant, nourished hair',
    description: 'Reveal your beautiful, shiny, and healthy-looking colored hair.',
    icon: 'sparkle'
  }
];