import { Newspaper, Image, Video, FileText } from 'lucide-react';

export const mediaItems = [
  {
    id: 'news',
    title: 'Latest News',
    icon: Newspaper
  },
  {
    id: 'images',
    title: 'Photo Gallery',
    icon: Image
  },
  {
    id: 'videos',
    title: 'Videos',
    icon: Video
  },
  {
    id: 'publications',
    title: 'Publications',
    icon: FileText
  }
];

export const latestNews = [
  {
    id: 1,
    title: "Export Bahrain Facilitates $50M Deal with European Markets",
    excerpt: "Local manufacturer secures major export contract through Export Bahrain's facilitation program, marking a significant milestone in Bahrain's export growth story.",
    image: "https://placehold.co/600x400/C92536/white?text=Export+Deal",
    date: "2023-12-25",
  },
  {
    id: 2,
    title: "New Trade Agreement Opens Doors for Bahraini Exporters",
    excerpt: "Strategic partnership agreement signed with Asian markets expanding opportunities for local businesses to reach new international markets.",
    image: "https://placehold.co/600x400/C92536/white?text=Trade+Agreement",
    date: "2023-12-20",
  }
];

export const photoGallery = [
  {
    id: 1,
    title: "Export Excellence Awards 2023",
    image: "https://placehold.co/800x600/C92536/white?text=Awards+2023",
  },
  {
    id: 2,
    title: "International Trade Exhibition",
    image: "https://placehold.co/800x600/C92536/white?text=Trade+Exhibition",
  },
  {
    id: 3,
    title: "Export Workshop Series",
    image: "https://placehold.co/800x600/C92536/white?text=Workshop+Series",
  }
];

export const videoGallery = [
  {
    id: 1,
    title: "Success Story: Al Rashid Group",
    thumbnail: "https://placehold.co/600x400/C92536/white?text=Success+Story",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Learn how Al Rashid Group expanded their reach to international markets."
  },
  {
    id: 2,
    title: "Export Bahrain Services Overview",
    thumbnail: "https://placehold.co/600x400/C92536/white?text=Services+Overview",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "A comprehensive overview of Export Bahrain's services and support programs."
  },
  {
    id: 3,
    title: "Export Success Masterclass",
    thumbnail: "https://placehold.co/600x400/C92536/white?text=Masterclass",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    description: "Expert insights on successful export strategies and market penetration."
  }
];

export const publications = [
  {
    id: 1,
    title: "Export Market Analysis 2023",
    cover: "https://placehold.co/300x400/C92536/white?text=Market+Analysis",
    type: "Report",
    description: "Comprehensive analysis of key export markets and opportunities for Bahraini businesses.",
    downloadUrl: "/downloads/market-analysis-2023.pdf",
  },
  {
    id: 2,
    title: "Exporter's Guide 2024",
    cover: "https://placehold.co/300x400/C92536/white?text=Exporter's+Guide",
    type: "Guide",
    description: "Step-by-step guide for businesses looking to start or expand their export operations.",
    downloadUrl: "/downloads/exporters-guide-2024.pdf",
  }
];

export const resources = [
  {
    id: 1,
    title: "Export Documentation Guide",
    icon: "FileText",
    downloadUrl: "/downloads/documentation-guide.pdf",
  },
  {
    id: 2,
    title: "Market Research Toolkit",
    icon: "BarChart",
    downloadUrl: "/downloads/research-toolkit.pdf",
  }
];
