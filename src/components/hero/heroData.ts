export interface SlideData {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const slides: SlideData[] = [
  {
    image: '/images/hero/slider1.png',
    title: 'Your Gateway to Global Markets',
    description: 'Empowering Bahraini businesses to expand globally through comprehensive export solutions',
    ctaText: 'Start Exporting',
    ctaLink: '/get-started'
  },
  {
    image: '/images/hero/slider2.png',
    title: 'End-to-End Export Solutions',
    description: 'From documentation to logistics, we support every step of your export journey',
    ctaText: 'View Solutions',
    ctaLink: '/solutions'
  },
  {
    image: '/images/hero/slider3.jpg',
    title: 'Digital Export Solutions',
    description: 'Leverage e-commerce and digital platforms to reach global customers',
    ctaText: 'Explore Digital',
    ctaLink: '/digital'
  },
  {
    image: '/images/hero/slider4.png',
    title: 'Expert Guidance & Support',
    description: 'Get professional advice and support to make your export journey successful',
    ctaText: 'Get Support',
    ctaLink: '/support'
  }
];