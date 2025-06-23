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
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-200">Mẫu AI</span> Chuyên Nghiệp
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Chọn từ hơn 150 mẫu được thiết kế chuyên nghiệp với khả năng AI tích hợp. 
            Hoàn hảo cho mọi ngành nghề và nhu cầu kinh doanh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />              <input
                type="text"
                placeholder="Tìm kiếm mẫu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Bộ Lọc</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
