export default function AboutTimeline() {
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
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From startup to industry leader - here&apos;s how we&apos;ve grown over the years
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
  );
}
