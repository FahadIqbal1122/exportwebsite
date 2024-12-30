import React from 'react';
import { serviceCategories } from './serviceData';
import ServiceMenuItem from './ServiceMenuItem';

interface ServiceMegaMenuProps {
  isOpen: boolean;
  isMobile?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServiceMegaMenu({ isOpen, isMobile, onMouseEnter, onMouseLeave }: ServiceMegaMenuProps) {
  if (!isOpen) return null;

  if (isMobile) {
    return (
      <div className="space-y-2">
        {serviceCategories.map((service, index) => (
          <ServiceMenuItem
            key={index}
            Icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            isMobile
          />
        ))}
      </div>
    );
  }

  // Calculate items per column (ceil to ensure all items are covered)
  const itemsPerColumn = Math.ceil(serviceCategories.length / 3);
  
  // Split services into three columns
  const firstColumn = serviceCategories.slice(0, itemsPerColumn);
  const secondColumn = serviceCategories.slice(itemsPerColumn, itemsPerColumn * 2);
  const thirdColumn = serviceCategories.slice(itemsPerColumn * 2);

  return (
    <div 
      className="fixed left-0 right-0 bg-white shadow-lg border-t border-gray-100" 
      style={{ top: '80px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-6">
            {firstColumn.map((service, index) => (
              <ServiceMenuItem
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
          <div className="space-y-6 border-l border-gray-100 pl-8">
            {secondColumn.map((service, index) => (
              <ServiceMenuItem
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
          <div className="space-y-6 border-l border-gray-100 pl-8">
            {thirdColumn.map((service, index) => (
              <ServiceMenuItem
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}