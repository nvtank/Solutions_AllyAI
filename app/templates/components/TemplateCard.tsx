'use client';

import { Star, Download, Eye, Check } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  viewMode: string;
  onPreview: (template: Template) => void;
}

export default function TemplateCard({ template, viewMode, onPreview }: TemplateCardProps) {
  const { t } = useLanguage();
  return (
    <div className={`group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative overflow-hidden ${
        viewMode === 'list' ? 'w-80 flex-shrink-0' : 'aspect-w-16 aspect-h-10'
      }`}>
        {/* Clean Image */}
        <Image 
          src={template.image} 
          alt={template.name}
          width={400}
          height={300}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            viewMode === 'list' ? 'h-full' : 'h-48'
          }`}
        />
        
        {/* Simple Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
            <button className="flex-1 bg-white text-gray-800 px-3 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{t('templates.card.preview')}</span>
            </button>
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
              {t('templates.card.use')}
            </button>
          </div>
        </div>
        
  
      </div>
      
      <div className="p-6 flex-1 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{template.name}</h3>
            <p className="text-sm text-gray-600">{template.category}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {template.description.split(' ').length > 10  
            ? template.description.split(' ').slice(0, 10).join(' ') + '...'
            : template.description
          }
        </p>
        
        {/* Simple Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Features for List View */}
        {viewMode === 'list' && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('templates.card.features')}</h4>
            <ul className="grid grid-cols-2 gap-1">
              {template.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-xs text-gray-600">
                  <Check className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Action Buttons - Always at bottom */}
        <div className="flex space-x-2 ">
          <button 
            onClick={() => onPreview(template)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1"
          >
            <Eye className="w-4 h-4" />
            <span>{t('templates.card.preview')}</span>
          </button>
          <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
            {t('templates.card.use')}
          </button>
        </div>
      </div>
    </div>
  );
}
