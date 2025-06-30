import { Lightbulb, Shield, Users, Target } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI technology, constantly exploring new solutions for industrial challenges.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your data and operations are protected with enterprise-grade security protocols and compliance standards.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Success",
      description: "We measure our success by your success. Every solution is tailored to deliver measurable business value.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          These principles guide everything we do, from product development to customer relationships
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br ${value.color} text-white`}>
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
