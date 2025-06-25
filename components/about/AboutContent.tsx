'use client';

import { useState } from 'react';
import AboutStory from './tabs/AboutStory';
import AboutValues from './tabs/AboutValues';
import AboutTeam from './tabs/AboutTeam';
import AboutTimeline from './tabs/AboutTimeline';

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'Our Story' },
    { id: 'values', label: 'Our Values' },
    { id: 'team', label: 'Our Team' },
    { id: 'timeline', label: 'Timeline' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'story':
        return <AboutStory />;
      case 'values':
        return <AboutValues />;
      case 'team':
        return <AboutTeam />;
      case 'timeline':
        return <AboutTimeline />;
      default:
        return <AboutStory />;
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => (
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

        {renderTabContent()}
      </div>
    </section>
  );
}
