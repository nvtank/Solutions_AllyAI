'use client';

import { 
  Grid, Building2, ShoppingCart, GraduationCap, Heart, Camera, 
  Briefcase, Utensils, Car, Home, Plane, Palette, Users, Shield
} from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  showFilters: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Grid: <Grid className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  ShoppingCart: <ShoppingCart className="w-4 h-4" />,
  GraduationCap: <GraduationCap className="w-4 h-4" />,
  Heart: <Heart className="w-4 h-4" />,
  Camera: <Camera className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
  Car: <Car className="w-4 h-4" />,
  Home: <Home className="w-4 h-4" />,
  Plane: <Plane className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  Shield: <Shield className="w-4 h-4" />
};

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  showFilters
}: SidebarProps) {
  const categories: Category[] = [
    { name: 'Tất Cả', icon: iconMap.Grid, count: 12 },
    { name: 'Du Lịch', icon: iconMap.Plane, count: 12 }
  ];

  return (
    <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
      {/* Clean Professional Sidebar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
        
        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Danh Mục</h3>
          
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`${
                    selectedCategory === category.name ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {category.icon}
                  </div>
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                  selectedCategory === category.name
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sắp xếp theo</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
          >
            <option value="popular">Phổ biến nhất</option>
            <option value="rating">Đánh giá cao nhất</option>
            <option value="newest">Mới nhất</option>
            <option value="name">Tên A-Z</option>
          </select>
        </div>

        {/* Price Filter Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Giá cả</h3>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700">Mẫu miễn phí</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700">Mẫu cao cấp</span>
            </label>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="p-4 bg-gray-50 rounded-lg border">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8★</div>
            <div className="text-sm text-gray-600 mb-3">Đánh giá trung bình</div>
            <div className="text-lg font-semibold text-gray-900">50K+ lượt tải</div>
          </div>
        </div>
      </div>
    </div>
  );
}
