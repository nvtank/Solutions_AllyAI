'use client';

import { X, Star, Download, Check, Eye } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Template } from '../types';

interface TemplateModalProps {
  template: Template | null;
  onClose: () => void;
}

export default function TemplateModal({ template, onClose }: TemplateModalProps) {
  const { t } = useLanguage();
  
  if (!template) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-xl">
        {/* Simple Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{template.name}</h3>
            <p className="text-gray-600">{t('templates.modal.templateType')} {template.category}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image & Stats */}
            <div className="space-y-6">
              {/* Main Image */}
              <div>
                <Image 
                  src={template.image} 
                  alt={template.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Clean Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{template.rating}</div>
                  <div className="text-sm text-gray-600">{t('templates.modal.rating')}</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Download className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{template.downloads.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{t('templates.modal.downloads')}</div>
                </div>
              </div>
              
              {/* Price */}
              <div className="text-center">
                <span className={`inline-block px-4 py-2 rounded-lg font-semibold ${
                  template.price === 'Free' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {template.price === 'Free' ? t('templates.modal.price.free') : t('templates.modal.price.premium')}
                </span>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('templates.modal.description')}</h4>
                <p className="text-gray-600 leading-relaxed">{template.description}</p>
              </div>
              
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('templates.modal.features')}</h4>
                <ul className="space-y-2">
                  {template.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('templates.modal.keywords')}</h4>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>{t('templates.modal.actions.demo')}</span>
                </button>
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('templates.modal.actions.use')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
