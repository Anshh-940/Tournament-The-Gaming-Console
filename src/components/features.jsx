import React from "react";

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* For Players Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <img
              src="/mock1.png"
              alt="For players and teams"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-16 h-16 border-4 border-red-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              For players and teams
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thousands of tournaments every week, on all the best games, for all playing levels, all over the world
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition-all shadow-lg">
              Explore tournaments
            </button>
          </div>
        </div>

        {/* For Organizers Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-16 h-16 border-4 border-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              For tournament organizers
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Easily manage all your tournaments and leagues whatever the game and the format with a wide choice of settings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition-all shadow-lg">
                Discover organizer software
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded font-semibold hover:bg-blue-50 transition-all">
                Start organizing
              </button>
            </div>
          </div>
          <div>
            <img
              src="/mock2.png"
              alt="For tournament organizers"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
