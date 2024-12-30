import { Shield, Handshake, Ship, Store, ShoppingCart, Globe2, LineChart, GraduationCap, Wrench, Wallet } from 'lucide-react';

export interface ServiceCategory {
  icon: any;
  title: string;
  description: string;
  link: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Shield,
    title: 'Export Credit Insurance',
    description: 'Protect your business against non-payment risks',
    link: '/services/export-credit'
  },
  {
    icon: Handshake,
    title: 'Export Facilitation & Deal Support',
    description: 'End-to-end support for export deals',
    link: '/services/export-facilitation'
  },
  {
    icon: Ship,
    title: 'Export Shipping & Logistics',
    description: 'Comprehensive shipping and logistics solutions',
    link: '/services/shipping-logistics'
  },
  {
    icon: Store,
    title: 'International Retail Buyer Initiative',
    description: 'Connect with global retail buyers',
    link: '/services/retail-buyer'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Facilitation',
    description: 'Digital marketplace solutions',
    link: '/services/e-commerce-facilitation'
  },
  {
    icon: Globe2,
    title: 'Internationalization & Export Advisory',
    description: 'Strategic guidance for global expansion',
    link: '/services/export-advisory'
  },
  {
    icon: LineChart,
    title: 'Export Market Intelligence',
    description: 'Data-driven market insights',
    link: '/services/market-intelligence'
  },
  {
    icon: GraduationCap,
    title: 'Export E-learning & Workshops',
    description: 'Educational resources and training',
    link: '/services/export-training'
  },
  {
    icon: Wrench,
    title: 'Export Readiness Tools',
    description: 'Assessment and preparation tools',
    link: '/services/export-readiness'
  },
  {
    icon: Wallet,
    title: 'Export Financing',
    description: 'Financial solutions for exporters',
    link: '/services/export-financing'
  }
];