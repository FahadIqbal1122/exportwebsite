import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceMenuItemProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  isMobile?: boolean;
}

export default function ServiceMenuItem({ Icon, title, description, link, isMobile }: ServiceMenuItemProps) {
  const LinkComponent = link ? Link : 'div';
  
  if (isMobile) {
    return (
      <LinkComponent
        to={link || '#'}
        className="block py-2 text-sm text-[#54585A] hover:text-[#C92536]"
      >
        <div className="flex items-center">
          <Icon className="w-4 h-4 mr-2" />
          <span>{title}</span>
        </div>
      </LinkComponent>
    );
  }

  return (
    <LinkComponent
      to={link || '#'}
      className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#C92536] group-hover:bg-[#C92536] group-hover:text-white transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-base font-medium text-[#54585A] group-hover:text-[#C92536] transition-colors">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </LinkComponent>
  );
}