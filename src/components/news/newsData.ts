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
    title: 'Bahrain Exports Show Strong Growth in Q1 2024',
    excerpt: 'Export sector demonstrates remarkable resilience with 15% year-over-year growth in the first quarter',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    category: 'Market Analysis',
    readTime: '5 min read',
    slug: 'bahrain-exports-q1-2024'
  },
  {
    id: '2',
    title: 'New Trade Agreement Opens Opportunities in Asian Markets',
    excerpt: 'Strategic partnership agreement set to boost export opportunities for Bahraini businesses in Southeast Asia',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80',
    category: 'Trade Agreements',
    readTime: '4 min read',
    slug: 'new-asia-trade-agreement'
  },
  {
    id: '3',
    title: 'Digital Export Solutions Workshop Series Announced',
    excerpt: 'Comprehensive training program to help businesses leverage digital tools for international trade',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    category: 'Events',
    readTime: '3 min read',
    slug: 'digital-export-workshop'
  }
];