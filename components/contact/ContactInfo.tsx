'use client';

import { Mail, Globe, MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactInfo() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.info.email.title'),
      details: "quyen@allyai.ai",
      description: t('contact.info.email.description'),
      color: "from-blue-500 to-indigo-500",
      link: "mailto:quyen@allyai.ai"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.info.phone.title'),
      details: "0935 479 122",
      description: t('contact.info.phone.description'),
      color: "from-green-500 to-emerald-500",
      link: "tel:+84935479122"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.info.address.title'),
      details: "153 Đống Đa, phường Hải Châu, thành phố Đà Nẵng",
      description: t('contact.info.address.description'),
      color: "from-purple-500 to-pink-500",
      link: "https://maps.app.goo.gl/d1kHAhfboqUG4diV7"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.info.hours.title'),
      details: t('contact.info.hours.details'),
      description: t('contact.info.hours.description'),
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${info.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-900 font-medium mb-1 block hover:text-blue-600 transition-colors duration-200"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-900 font-medium mb-1">{info.details}</p>
              )}
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
