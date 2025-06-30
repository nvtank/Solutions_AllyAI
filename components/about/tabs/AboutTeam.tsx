import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

export default function AboutTeam() {
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

  return (
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
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
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
  );
}
