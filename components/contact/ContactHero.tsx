import { Calendar, MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-blue-200">Touch</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your industrial operations? We&apos;re here to help you get started with AI solutions 
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all flex items-center space-x-3 font-medium">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
            <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/30 transition-all flex items-center space-x-3 font-medium">
              <MessageSquare className="w-5 h-5" />
              <span>Start Chat</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
