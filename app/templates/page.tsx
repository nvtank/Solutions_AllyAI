'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import TemplatesHeader from './components/TemplatesHeader';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import TemplateCard from './components/TemplateCard';
import TemplateModal from './components/TemplateModal';
import { templates } from './data/constants';
import { Template } from './types';

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar currentPage="templates" />

        <TemplatesHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              showFilters={showFilters}
            />

            <div className="flex-1">
              <Toolbar
                templatesCount={sortedTemplates.length}
                viewMode={viewMode}
                setViewMode={setViewMode}
                showFilters={showFilters}
                setShowFilters={setShowFilters}
              />

              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    viewMode={viewMode}
                    onPreview={setSelectedTemplate}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all font-medium">
                  Load More Templates
                </button>
              </div>
            </div>
          </div>
        </div>

        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}