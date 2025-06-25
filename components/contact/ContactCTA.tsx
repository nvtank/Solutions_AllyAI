import { Calendar, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
      <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p className="mb-6 opacity-90">
        Schedule a free consultation to discuss your industrial AI needs.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
        <Calendar className="w-5 h-5" />
        <span>Schedule Consultation</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
