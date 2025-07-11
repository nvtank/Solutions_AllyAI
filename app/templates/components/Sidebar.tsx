'use client';

import { 
  Grid, Building2, ShoppingCart, GraduationCap, Heart, Camera, 
  Briefcase, Utensils, Car, Home, Plane, Palette, Users, Shield
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { t } = useLanguage();

  const categories: Category[] = [
    { name: t('templates.sidebar.allCategories'), key: 'ALL', icon: iconMap.Grid, count: 12 },
    { name: t('templates.sidebar.travel'), key: 'TRAVEL', icon: iconMap.Plane, count: 12 }
  ];

  const isSelected = (categoryKey: string, categoryName: string) => {
    return selectedCategory === categoryKey || 
           selectedCategory === categoryName || 
           (categoryKey === 'ALL' && (selectedCategory === 'ALL' || selectedCategory === t('templates.sidebar.allCategories')));
  };

  return (
    <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
      {/* Clean Professional Sidebar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
        
        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('templates.sidebar.categories')}</h3>
          
          <div className="space-y-2">
            {categories.map((category) => {
              const isActive = isSelected(category.key || '', category.name);
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.key || category.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${
                      isActive ? 'text-blue-600' : 'text-gray-400'
                    }`}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('templates.sidebar.sortBy')}</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
          >
            <option value="popular">{t('templates.sidebar.sortOptions.popular')}</option>
            <option value="rating">{t('templates.sidebar.sortOptions.rating')}</option>
            <option value="newest">{t('templates.sidebar.sortOptions.newest')}</option>
            <option value="name">{t('templates.sidebar.sortOptions.name')}</option>
          </select>
        </div>

        {/* Price Filter Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('templates.sidebar.priceFilter.title')}</h3>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700">{t('templates.sidebar.priceFilter.free')}</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700">{t('templates.sidebar.priceFilter.premium')}</span>
            </label>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="p-4 bg-gray-50 rounded-lg border">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8★</div>
            <div className="text-sm text-gray-600 mb-3">{t('templates.sidebar.stats.averageRating')}</div>
            <div className="text-lg font-semibold text-gray-900">50K+ {t('templates.sidebar.stats.totalDownloads')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
