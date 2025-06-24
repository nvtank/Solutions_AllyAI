import { ArrowRight } from 'lucide-react';
import { Solution } from './solutionsData';

interface SolutionCardProps {
  solution: Solution;
  index: number;
  floatingParticles?: Array<{
    key: number;
    style: React.CSSProperties;
    className: string;
  }>;
}

export default function SolutionCard({ solution, index, floatingParticles = [] }: SolutionCardProps) {
  return (
    <div 
      className="flex-shrink-0 w-screen h-screen relative overflow-hidden"
      style={{ opacity: 1, willChange: 'auto' }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-30`} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingParticles.map((particle) => (
          <div
            key={particle.key}
            className={particle.className}
            style={{
              ...particle.style,
              willChange: 'transform'
            }}
          />
        ))}
      </div>

      {/* Two-Column Content Grid */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Content Column */}
            <div 
              className={`card-content space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              style={{ opacity: 1, transform: 'translateX(0px)', willChange: 'transform' }}
            >
              {/* Header */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center text-white shadow-xl transform-gpu`}>
                    {solution.icon}
                  </div>
                  <div className="text-6xl font-bold text-gray-200">
                    {solution.id}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {solution.title}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent mb-4`}>
                    {solution.subtitle}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {solution.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="feature-item flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform-gpu"
                    style={{ opacity: 1, transform: 'translateY(0px)', willChange: 'transform' }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`} />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats & CTA */}
              <div className="flex items-center justify-between pt-6">
                <div className="space-y-2">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.stats.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {solution.stats.label}
                  </div>
                </div>
                
                <button className={`group px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-lg hover:shadow-xl transition-all duration-300 font-medium relative overflow-hidden transform-gpu`}>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Xem mẫu ngay</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div 
              className={`visual-container ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              style={{ opacity: 1, transform: 'translateX(0px)', willChange: 'transform' }}
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform-gpu">
                {/* Placeholder for Image/Illustration */}
                <div 
                  className={`w-full h-full bg-gradient-to-br ${solution.bgGradient} flex items-center justify-center text-2xl font-bold text-black opacity-70`}
                >
                  {solution.title} Visual
                </div>
                {/* Uncomment if solution.image exists in Solution interface */}
                {/* <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      {index < 4 && (
        <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-gray-500">
          <span className="text-sm font-medium">Scroll to continue</span>
          <ArrowRight className="w-4 h-4 animate-pulse" />
        </div>
      )}
    </div>
  );
}