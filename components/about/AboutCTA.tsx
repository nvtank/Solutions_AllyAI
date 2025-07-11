export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Join Our Mission?
        </h2>
        <p className="text-xl mb-10 opacity-90">
          Whether you&apos;re looking for AI solutions or want to join our team, we&apos;d love to hear from you
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
  );
}
