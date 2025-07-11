'use client';

import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSidebar() {
  const { t } = useLanguage();
  const offices = [
    {
      city: "Đà Nẵng",
      country: "Việt Nam",
      address: "153 Đống Đa, phường Hải Châu, thành phố Đà Nẵng",
      phone: "0935 479 122",
      email: "quyen@allyai.ai",
      phoneLink: "tel:+84935479122",
      emailLink: "mailto:quyen@allyai.ai",
      addressLink: "https://maps.app.goo.gl/d1kHAhfboqUG4diV7"
    }
  ];

  return (
    <div className="space-y-8">
     
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sidebar.office')}</h3>
        <div className="space-y-6">
          {offices.map((office, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-start space-x-3 mb-4">
                <Globe className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{office.city}, {office.country}</h4>
                </div>
              </div>
              
              <div className="space-y-3 ml-8">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">{t('contact.sidebar.address')}</p>
                    <a 
                      href={office.addressLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {office.address}
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">{t('contact.sidebar.phone')}</p>
                    <a 
                      href={office.phoneLink}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">{t('contact.sidebar.email')}</p>
                    <a 
                      href={office.emailLink}
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
