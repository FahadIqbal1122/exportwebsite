export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

export const latestNews: NewsItem[] = [
  {
    id: '1',
    title: 'Export Bahrain Achieves $1 Billion in National Exports: A Testament to Growth, Collaboration, and Vision',
    excerpt: 'As Bahrain continues to strengthen its position in the global economy, Export Bahrain celebrates its dedicated efforts over the past six years in empowering Bahrain-based businesses to expand internationally, facilitating in a remarkable $1 billion in export value.',
    date: 'March 15, 2024',
    image: 'https://export.bh/wp-content/uploads/2024/12/2024-Export-Bahrain-1-Billion-09-scaled.jpg',
    category: 'Market Analysis',
    readTime: '5 min read',
    slug: 'bahrain-exports-q1-2024'
  },
  {
    id: '2',
    title: 'Export Bahrain Partners with Bahrain Commercial Facilities Company',
    excerpt: 'Export Bahrain is excited to announce a significant partnership with Bahrain Commercial Facilities Company (BCFC), a leading financial institution in the Kingdom, through the signing of a Memorandum of Understanding.',
    date: 'March 12, 2024',
    image: 'https://export.bh/wp-content/uploads/2024/11/Bahrain-Credit-Banner.png',
    category: 'Trade Agreements',
    readTime: '4 min read',
    slug: 'new-asia-trade-agreement'
  },
  {
    id: '3',
    title: 'Third Edition of ‘Export Week’',
    excerpt: 'Manama, Bahrain – Export Bahrain has successfully concluded the third edition of ‘Export Week,’ marking a significant milestone in its six-year journey.',
    date: 'March 10, 2024',
    image: 'https://export.bh/wp-content/uploads/2024/11/2-Website-6250-x-3763-02-02-02.png',
    category: 'Events',
    readTime: '3 min read',
    slug: 'digital-export-workshop'
  }
];