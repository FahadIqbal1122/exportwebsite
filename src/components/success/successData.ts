export interface SuccessStory {
  companyName: string;
  industry: string;
  logo: string;
  image: string;
  description: string;
  achievement: string;
  year: string;
}

export const successStories: SuccessStory[] = [
  {
    companyName: "Gulf Manufacturing Solutions",
    industry: "Manufacturing",
    logo: "/images/success/logo1.png",
    image: "/images/success/company1.png",
    description: "Expanded their manufacturing operations to reach European markets",
    achievement: "300% increase in export revenue",
    year: "2023"
  },
  {
    companyName: "Bahrain Food Innovations",
    industry: "Food & Beverage",
    logo: "/images/success/logo2.jpg",
    image: "/images/success/company2.png",
    description: "Successfully entered GCC markets with innovative food products",
    achievement: "Present in 6 GCC countries",
    year: "2023"
  },
  {
    companyName: "Tech Solutions Bahrain",
    industry: "Technology",
    logo: "/images/success/logo3.jpeg",
    image: "/images/success/company3.png",
    description: "Expanded their software solutions to Southeast Asian markets",
    achievement: "Secured $2M in international contracts",
    year: "2023"
  },
  {
    companyName: "Bahrain Crafts Co.",
    industry: "Handicrafts",
    logo: "/images/success/logo4.png",
    image: "/images/success/company4.jpg",
    description: "Successfully launched their traditional crafts in European markets",
    achievement: "Featured in major European exhibitions",
    year: "2023"
  }
];
