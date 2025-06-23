import { X, Star, Download, Check } from 'lucide-react';
import Image from 'next/image';
import { Template } from '../types';

interface TemplateModalProps {
  template: Template | null;
  onClose: () => void;
}

export default function TemplateModal({ template, onClose }: TemplateModalProps) {
  if (!template) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{template.name}</h3>
            <p className="text-gray-600">{template.category} Template</p>
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
            <div>
              <Image 
                src={template.image} 
                alt={template.name}
                width={400}
                height={256}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{template.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{template.downloads.toLocaleString()}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  template.price === 'Free' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {template.price}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
              <p className="text-gray-600 mb-6">{template.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Features</h4>
              <ul className="space-y-2 mb-6">
                {template.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {template.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Live Preview
                </button>
                <button className={`flex-1 bg-gradient-to-r ${template.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all`}>
                  Use Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
