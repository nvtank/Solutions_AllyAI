import { Star, Download, Eye, Check } from 'lucide-react';
import Image from 'next/image';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  viewMode: string;
  onPreview: (template: Template) => void;
}

export default function TemplateCard({ template, viewMode, onPreview }: TemplateCardProps) {
  return (
    <div className={`group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <div className={`relative overflow-hidden ${
        viewMode === 'list' ? 'w-80 flex-shrink-0' : 'aspect-w-16 aspect-h-10'
      }`}>        <Image 
          src={template.image} 
          alt={template.name}
          width={400}
          height={300}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            viewMode === 'list' ? 'h-full' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
            <button className="flex-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors flex items-center justify-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            <button className={`flex-1 bg-gradient-to-r ${template.color} text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all`}>
              Use Template
            </button>
          </div>
        </div>
        <div className={`absolute top-3 left-3 px-2 py-1 bg-gradient-to-r ${template.color} text-white text-xs rounded-full font-medium`}>
          AI Enhanced
        </div>
        {template.price === 'Premium' && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full font-medium">
            Premium
          </div>
        )}
      </div>
      
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{template.name}</h3>
            <p className="text-sm text-gray-600">{template.category}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{template.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm">{template.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Download className="w-4 h-4" />
            <span>{template.downloads.toLocaleString()} downloads</span>
          </div>
          <span className="font-semibold text-gray-900">{template.price}</span>
        </div>
        
        {viewMode === 'list' && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
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
        
        <div className="flex space-x-2">
          <button 
            onClick={() => onPreview(template)}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button className={`flex-1 bg-gradient-to-r ${template.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all`}>
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}
