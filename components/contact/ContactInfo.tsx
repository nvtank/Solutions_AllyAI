import { Mail, Globe, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "bd@tripc.ai",
      description: "Gửi email cho chúng tôi bất cứ lúc nào",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      details: "solutions.tripc.ai",
      description: "Khám phá các giải pháp của chúng tôi",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Innovation Drive, San Francisco, CA 94105",
      description: "Our headquarters",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Chúng tôi luôn sẵn sàng hỗ trợ",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${info.color} text-white`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-900 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
