'use client';

import { FaExternalLinkAlt, FaAmazon } from 'react-icons/fa';

interface AffiliateLinkProps {
  href: string;
  title: string;
  description?: string;
  price?: string;
  image?: string;
  variant?: 'compact' | 'card' | 'banner';
}

export default function AffiliateLink({ 
  href, 
  title, 
  description, 
  price,
  variant = 'card' 
}: AffiliateLinkProps) {
  
  if (variant === 'compact') {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline transition-colors"
        onClick={() => {
          // Track affiliate click
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'affiliate_click', {
              event_category: 'affiliate',
              event_label: title
            });
          }
        }}
      >
        {title}
        <FaExternalLinkAlt className="w-3 h-3" />
      </a>
    );
  }

  if (variant === 'banner') {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-4 hover:shadow-md transition-all"
        onClick={() => {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'affiliate_click', {
              event_category: 'affiliate',
              event_label: title
            });
          }
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <FaAmazon className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{title}</p>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
          <div className="text-right">
            {price && <p className="font-bold text-orange-600">{price}</p>}
            <span className="inline-flex items-center gap-1 text-sm text-blue-600">
              View on Amazon <FaExternalLinkAlt className="w-3 h-3" />
            </span>
          </div>
        </div>
      </a>
    );
  }

  // Default card variant
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-orange-300 transition-all"
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'affiliate_click', {
            event_category: 'affiliate',
            event_label: title
          });
        }
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <FaAmazon className="w-6 h-6 text-orange-600" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
          <div className="flex items-center justify-between">
            {price && <span className="font-bold text-orange-600">{price}</span>}
            <span className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
              Check Price <FaExternalLinkAlt className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

// Pre-configured affiliate products for common converter categories
export const affiliateProducts = {
    weight: {
    digitalScale: {
      title: "Digital Body Weight Scale",
      description: "High precision with BMI tracking",
      href: "https://www.amazon.com/s?k=digital+bathroom+scale+precision&ref=nb_sb_noss",
      price: "$25-50"
    },
    luggageScale: {
      title: "Digital Luggage Scale",
      description: "Portable 110lb capacity for travel",
      href: "https://www.amazon.com/s?k=digital+luggage+scale+portable&ref=nb_sb_noss",
      price: "$10-20"
    },
    kitchenScale: {
      title: "Precision Kitchen Scale",
      description: "0.01g accuracy for ingredients",
      href: "https://www.amazon.com/s?k=precision+kitchen+scale+0.01g&ref=nb_sb_noss",
      price: "$20-40"
    }
  },
  length: {
    tapeMeasure: {
      title: "Digital Tape Measure",
      description: "25ft with digital readout and memory",
      href: "https://www.amazon.com/s?k=digital+tape+measure+25ft&ref=nb_sb_noss",
      price: "$30-60"
    },
    caliper: {
      title: "Digital Caliper",
      description: "6 inch precision measuring tool",
      href: "https://www.amazon.com/s?k=digital+caliper+6+inch&ref=nb_sb_noss",
      price: "$20-50"
    },
    laserMeasure: {
      title: "Laser Distance Measurer",
      description: "165ft range, perfect for rooms",
      href: "https://www.amazon.com/s?k=laser+distance+measurer&ref=nb_sb_noss",
      price: "$40-100"
    }
  },
  temperature: {
    thermometer: {
      title: "IR Thermometer Gun",
      description: "Non-contact -58°F to 1112°F range",
      href: "https://www.amazon.com/s?k=infrared+thermometer+gun&ref=nb_sb_noss",
      price: "$25-60"
    },
    ovenThermometer: {
      title: "Oven Thermometer",
      description: "High heat resistant for accurate baking",
      href: "https://www.amazon.com/s?k=oven+thermometer+high+heat&ref=nb_sb_noss",
      price: "$8-15"
    }
  },
  data: {
    externalSSD: {
      title: "Portable SSD Drive",
      description: "1TB fast storage for files",
      href: "https://www.amazon.com/s?k=portable+ssd+1tb&ref=nb_sb_noss",
      price: "$80-150"
    },
    flashDrive: {
      title: "USB 3.0 Flash Drive",
      description: "128GB high speed storage",
      href: "https://www.amazon.com/s?k=usb+3.0+flash+drive+128gb&ref=nb_sb_noss",
      price: "$15-30"
    }
  }
};
