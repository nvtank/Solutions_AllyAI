import { Grid, List, Filter } from 'lucide-react';

interface ToolbarProps {
  templatesCount: number;
  viewMode: string;
  setViewMode: (mode: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export default function Toolbar({
  templatesCount,
  viewMode,
  setViewMode,
  showFilters,
  setShowFilters
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">        <span className="text-gray-600">
          Tìm thấy {templatesCount} mẫu
        </span>
        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
      >        <Filter className="w-4 h-4" />
        <span>Bộ Lọc</span>
      </button>
    </div>
  );
}
