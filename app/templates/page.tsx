'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Eye, 
  Download, 
  ArrowRight, 
  ChevronDown,
  Palette,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Building2,
  ShoppingCart,
  GraduationCap,
  Heart,
  Camera,
  Briefcase,
  Utensils,
  Car,
  Home,
  Music,
  Gamepad2,
  Brain,
  X,
  Check,
  Zap,
  Layers,
  Settings,
  TrendingUp
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const categories = [
    { name: 'All', icon: <Grid className="w-4 h-4" />, count: 150 },
    { name: 'Business', icon: <Building2 className="w-4 h-4" />, count: 25 },
    { name: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" />, count: 20 },
    { name: 'Education', icon: <GraduationCap className="w-4 h-4" />, count: 18 },
    { name: 'Healthcare', icon: <Heart className="w-4 h-4" />, count: 15 },
    { name: 'Portfolio', icon: <Camera className="w-4 h-4" />, count: 22 },
    { name: 'Corporate', icon: <Briefcase className="w-4 h-4" />, count: 16 },
    { name: 'Restaurant', icon: <Utensils className="w-4 h-4" />, count: 12 },
    { name: 'Automotive', icon: <Car className="w-4 h-4" />, count: 8 },
    { name: 'Real Estate', icon: <Home className="w-4 h-4" />, count: 14 }
  ];

  const templates = [
    {
      id: 1,
      name: "Industrial Pro",
      category: "Business",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      downloads: 3247,
      price: "Free",
      tags: ["Manufacturing", "Industrial", "Corporate"],
      description: "Professional industrial template with modern design and AI integration",
      features: ["Responsive Design", "AI Chatbot", "Analytics Dashboard", "SEO Optimized"],
      color: "from-blue-600 to-indigo-600",
      preview: "https://industrial-pro-demo.com"
    },
    {
      id: 2,
      name: "Smart Factory",
      category: "Business",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      downloads: 2156,
      price: "Premium",
      tags: ["Factory", "IoT", "Automation"],
      description: "Advanced factory management template with IoT integration",
      features: ["IoT Dashboard", "Real-time Monitoring", "Predictive Analytics", "Mobile App"],
      color: "from-slate-600 to-gray-600",
      preview: "https://smart-factory-demo.com"
    },
    {
      id: 3,
      name: "TechCorp Solutions",
      category: "Corporate",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      downloads: 1923,
      price: "Free",
      tags: ["Technology", "Corporate", "Modern"],
      description: "Clean corporate template for technology companies",
      features: ["Modern Design", "Team Showcase", "Service Pages", "Contact Forms"],
      color: "from-emerald-600 to-teal-600",
      preview: "https://techcorp-demo.com"
    },
    {
      id: 4,
      name: "MedCare Plus",
      category: "Healthcare",
      image: "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      downloads: 1654,
      price: "Premium",
      tags: ["Healthcare", "Medical", "Clinic"],
      description: "Professional healthcare template with appointment booking",
      features: ["Appointment System", "Patient Portal", "Doctor Profiles", "Medical Forms"],
      color: "from-rose-600 to-pink-600",
      preview: "https://medcare-demo.com"
    },
    {
      id: 5,
      name: "EduLearn Platform",
      category: "Education",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      downloads: 2847,
      price: "Free",
      tags: ["Education", "Learning", "Online"],
      description: "Comprehensive e-learning platform with AI tutoring",
      features: ["Course Management", "AI Tutoring", "Progress Tracking", "Certificates"],
      color: "from-violet-600 to-purple-600",
      preview: "https://edulearn-demo.com"
    },
    {
      id: 6,
      name: "ShopSmart E-commerce",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      downloads: 3156,
      price: "Premium",
      tags: ["E-commerce", "Shopping", "Retail"],
      description: "Advanced e-commerce template with AI recommendations",
      features: ["Product Catalog", "AI Recommendations", "Payment Gateway", "Inventory Management"],
      color: "from-orange-600 to-red-600",
      preview: "https://shopsmart-demo.com"
    },
    {
      id: 7,
      name: "Creative Portfolio",
      category: "Portfolio",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      downloads: 1876,
      price: "Free",
      tags: ["Portfolio", "Creative", "Artist"],
      description: "Stunning portfolio template for creative professionals",
      features: ["Gallery Showcase", "Project Details", "Client Testimonials", "Contact Form"],
      color: "from-cyan-600 to-blue-600",
      preview: "https://creative-portfolio-demo.com"
    },
    {
      id: 8,
      name: "RestaurantPro",
      category: "Restaurant",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.4,
      downloads: 1234,
      price: "Premium",
      tags: ["Restaurant", "Food", "Menu"],
      description: "Professional restaurant template with online ordering",
      features: ["Digital Menu", "Online Ordering", "Reservation System", "Reviews"],
      color: "from-yellow-600 to-orange-600",
      preview: "https://restaurant-pro-demo.com"
    },
    {
      id: 9,
      name: "AutoDealer Pro",
      category: "Automotive",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      downloads: 987,
      price: "Premium",
      tags: ["Automotive", "Cars", "Dealer"],
      description: "Complete automotive dealership template",
      features: ["Vehicle Listings", "Search Filters", "Financing Calculator", "Test Drive Booking"],
      color: "from-gray-600 to-slate-600",
      preview: "https://autodealer-demo.com"
    },
    {
      id: 10,
      name: "PropertyHub",
      category: "Real Estate",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      downloads: 1567,
      price: "Free",
      tags: ["Real Estate", "Property", "Listings"],
      description: "Modern real estate template with property search",
      features: ["Property Listings", "Advanced Search", "Virtual Tours", "Agent Profiles"],
      color: "from-indigo-600 to-blue-600",
      preview: "https://propertyhub-demo.com"
    }
  ];

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

        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional <span className="text-blue-200">AI Templates</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Choose from 150+ professionally designed templates enhanced with AI capabilities. 
                Perfect for any industry or business need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search templates..."
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
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
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

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    {sortedTemplates.length} templates found
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
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Templates Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedTemplates.map((template) => (
                  <div key={template.id} className={`group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-80 flex-shrink-0' : 'aspect-w-16 aspect-h-10'
                    }`}>
                      <img 
                        src={template.image} 
                        alt={template.name}
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
                          onClick={() => setSelectedTemplate(template)}
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
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all font-medium">
                  Load More Templates
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Template Preview Modal */}
        {selectedTemplate && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedTemplate.name}</h3>
                  <p className="text-gray-600">{selectedTemplate.category} Template</p>
                </div>
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedTemplate.image} 
                      alt={selectedTemplate.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{selectedTemplate.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{selectedTemplate.downloads.toLocaleString()}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedTemplate.price === 'Free' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {selectedTemplate.price}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                    <p className="text-gray-600 mb-6">{selectedTemplate.description}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Features</h4>
                    <ul className="space-y-2 mb-6">
                      {selectedTemplate.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedTemplate.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                        Live Preview
                      </button>
                      <button className={`flex-1 bg-gradient-to-r ${selectedTemplate.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all`}>
                        Use Template
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}