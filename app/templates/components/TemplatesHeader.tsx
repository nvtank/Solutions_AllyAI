'use client';

import { Search, Filter } from 'lucide-react';

interface TemplatesHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export default function TemplatesHeader({ 
  searchTerm, 
  setSearchTerm, 
  showFilters, 
  setShowFilters 
}: TemplatesHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-900 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Simple Professional Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mẫu Website Du Lịch
          </h1>
          <p className="text-xl text-white mb-6 max-w-3xl mx-auto">
            Bộ sưu tập mẫu website chuyên nghiệp cho ngành du lịch với tích hợp AI thông minh
          </p>
          
          {/* Clean Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">12</span>
              <p className="text-sm text-white">Mẫu</p>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">4.8★</span>
              <p className="text-sm text-white">Đánh giá</p>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <span className="text-2xl font-bold text-white">50K+</span>
              <p className="text-sm text-white">Lượt tải</p>
            </div>
          </div>
        </div>
        
        {/* Clean Search & Filter */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Simple Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm mẫu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            
            {/* Simple Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-3 border rounded-lg transition-colors flex items-center space-x-2 ${
                showFilters 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>Bộ lọc</span>
            </button>
          </div>
          
          {/* Professional Tags */}
          <div className="mt-6 text-center ">
            <p className="text-sm text-white mb-3">Danh mục phổ biến:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Khách sạn', 'Tour du lịch', 'Homestay', 'Travel blog'].map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
