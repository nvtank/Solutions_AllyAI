import { Globe } from 'lucide-react';

export default function ContactSidebar() {
  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@tripcsolutions.com"
    },
    {
      city: "London",
      country: "UK",
      address: "45 Tech Street, London EC2A 4DP",
      phone: "+44 20 7123 4567",
      email: "london@tripcsolutions.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "10 Marina Boulevard, Singapore 018983",
      phone: "+65 6123 4567",
      email: "singapore@tripcsolutions.com"
    }
  ];

  return (
    <div className="space-y-8">
      {/* FAQ */}
      <div className="bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">How quickly can I get started?</h4>
            <p className="text-gray-600">Most clients can get started within 1-2 weeks after initial consultation.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom solutions?</h4>
            <p className="text-gray-600">Yes, we specialize in creating tailored AI solutions for specific industrial needs.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What kind of support do you provide?</h4>
            <p className="text-gray-600">We offer 24/7 technical support and dedicated account management for all clients.</p>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Offices</h3>
        <div className="space-y-6">
          {offices.map((office, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{office.city}, {office.country}</h4>
                  <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                  <p className="text-sm text-gray-600">{office.phone}</p>
                  <p className="text-sm text-blue-600">{office.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
