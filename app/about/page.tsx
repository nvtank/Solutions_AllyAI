'use client';

import { useState, useEffect } from 'react';
import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp,
  Lightbulb,
  Shield,
  Heart,
  Zap,
  Building2,
  Factory,
  Wrench,
  Settings,
  ArrowRight,
  Play,
  Check,
  Star,
  Quote,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Building2 className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "System Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="w-6 h-6" /> }
  ];

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

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former VP of Engineering at TechCorp with 15+ years in industrial AI",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      position: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI researcher and former Google engineer specializing in machine learning",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Elena Rodriguez",
      position: "Head of Product",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Product strategist with deep expertise in industrial automation",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      position: "Head of Engineering",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack engineer passionate about scalable AI infrastructure",
      linkedin: "#",
      github: "#"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize AI for industrial applications"
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Deployed our first smart factory solution for a Fortune 500 manufacturer"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M to expand our AI platform and team"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia, serving 50+ countries"
    },
    {
      year: "2024",
      title: "AI Platform 2.0",
      description: "Launched next-generation platform with advanced predictive capabilities"
    },
    {
      year: "2025",
      title: "Industry Leadership",
      description: "Recognized as a leader in industrial AI solutions"
    }
  ];

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-white">
        <Navbar currentPage="about" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  About <span className="text-blue-200">TripC Solutions</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  We're on a mission to transform industries through intelligent AI solutions. 
                  Founded by industry experts, we're building the future of industrial automation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:shadow-xl transition-all flex items-center space-x-3 font-medium">
                    <span>Our Story</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/30 transition-all flex items-center space-x-3 font-medium">
                    <Play className="w-5 h-5" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg">
                {[
                  { id: 'story', label: 'Our Story' },
                  { id: 'values', label: 'Our Values' },
                  { id: 'team', label: 'Our Team' },
                  { id: 'timeline', label: 'Timeline' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Our Story */}
            {activeTab === 'story' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Building the Future of <span className="text-blue-600">Industrial AI</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded in 2020 by a team of AI researchers and industry veterans, TripC Solutions was born from a simple observation: 
                    while AI was transforming consumer technology, industrial applications were being left behind.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    We set out to change that by creating AI solutions specifically designed for the unique challenges of 
                    manufacturing, construction, and heavy industry. Today, we're proud to serve hundreds of companies 
                    across 50+ countries.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {team.slice(0, 4).map((member, i) => (
                        <img
                          key={i}
                          src={member.image}
                          alt={member.name}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">Meet our founding team</span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our Story"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                </div>
              </div>
            )}

            {/* Our Values */}
            {activeTab === 'values' && (
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
            )}

            {/* Our Team */}
            {activeTab === 'team' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Industry experts and AI pioneers working together to transform the future of work
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                      <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex justify-center space-x-3">
                        {member.linkedin && (
                          <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a href={member.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {activeTab === 'timeline' && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From startup to industry leader - here's how we've grown over the years
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                        </div>
                        <div className="w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Whether you're looking for AI solutions or want to join our team, we'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-12 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 text-lg font-bold">
                Get Started
              </button>
              <button className="px-12 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium">
                View Careers
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}