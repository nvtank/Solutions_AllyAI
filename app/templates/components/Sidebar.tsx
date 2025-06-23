import { 
  Grid, Building2, ShoppingCart, GraduationCap, Heart, Camera, 
  Briefcase, Utensils, Car, Home 
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
  Home: <Home className="w-4 h-4" />
};

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  showFilters
}: SidebarProps) {
  const categories: Category[] = [
    { name: 'All', icon: iconMap.Grid, count: 150 },
    { name: 'Business', icon: iconMap.Building2, count: 25 },
    { name: 'E-commerce', icon: iconMap.ShoppingCart, count: 20 },
    { name: 'Education', icon: iconMap.GraduationCap, count: 18 },
    { name: 'Healthcare', icon: iconMap.Heart, count: 15 },
    { name: 'Portfolio', icon: iconMap.Camera, count: 22 },
    { name: 'Corporate', icon: iconMap.Briefcase, count: 16 },
    { name: 'Restaurant', icon: iconMap.Utensils, count: 12 },
    { name: 'Automotive', icon: iconMap.Car, count: 8 },
    { name: 'Real Estate', icon: iconMap.Home, count: 14 }
  ];

  return (
    <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                selectedCategory === category.name
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">Free Templates</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">Premium Templates</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
