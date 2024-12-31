export interface SlideData {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export const slides: SlideData[] = [
  {
    image: 'https://export.bh/wp-content/uploads/2022/01/EBTeam-02-1.png',
    title: 'Your Gateway to Global Markets',
    description: 'Empowering Bahraini businesses to expand globally through comprehensive export solutions',
    ctaText: 'Start Exporting',
    ctaLink: '/get-started'
  },
  {
    image: 'https://export.bh/wp-content/uploads/2021/05/startup-exporter-solution.png',
    title: 'End-to-End Export Solutions',
    description: 'From documentation to logistics, we support every step of your export journey',
    ctaText: 'View Solutions',
    ctaLink: '/solutions'
  },
  {
    image: 'https://export.bh/wp-content/uploads/2022/01/export-bahrain-team.jpg',
    title: 'Digital Export Solutions',
    description: 'Leverage e-commerce and digital platforms to reach global customers',
    ctaText: 'Explore Digital',
    ctaLink: '/digital'
  },
  {
    image: 'https://export.bh/wp-content/uploads/2021/05/credit-Insured.jpg',
    title: 'Expert Guidance & Support',
    description: 'Get professional advice and support to make your export journey successful',
    ctaText: 'Get Support',
    ctaLink: '/support'
  }
];