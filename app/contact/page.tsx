'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Building2,
  Users,
  MessageSquare,
  Headphones,
  Globe,
  Calendar,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
    { value: 'sales', label: 'Sales & Pricing', icon: <Building2 className="w-5 h-5" /> },
    { value: 'support', label: 'Technical Support', icon: <Headphones className="w-5 h-5" /> },
    { value: 'partnership', label: 'Partnership', icon: <Users className="w-5 h-5" /> },
    { value: 'demo', label: 'Request Demo', icon: <Calendar className="w-5 h-5" /> }
  ];

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
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="contact" />

        {/* Hero Section */}
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

        {/* Contact Info Cards */}
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

        {/* Main Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Message sent successfully! We&apos;ll be in touch soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {inquiryTypes.map((type) => (
                        <label key={type.value} className="flex items-center">
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.inquiryType === type.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            {type.icon}
                            <span className="text-sm font-medium">{type.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-medium"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Additional Info */}
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

                {/* CTA */}
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
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}