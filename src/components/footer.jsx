import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const trustedByLogos = [
    "UBISOFT", "EVA", "MOONTON", "WARGAMING.NET", "RIOT GAMES", "Microsoft",
    "Red Bull", "PGL", "webedia/.", "logitech", "stc", "VITALITY"
  ];

  return (
    <footer className="bg-white">
      {/* Trusted By Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Trusted by
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {trustedByLogos.map((company, index) => (
              <div
                key={index}
                className="text-gray-800 font-bold text-base lg:text-lg hover:text-blue-600 transition-colors cursor-pointer text-center"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-[#2d3561] via-[#3d4575] to-[#4a3d6f] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-red-500 rounded-full flex items-center justify-center">
                  <div className="text-white font-bold text-xl">⟲</div>
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="text-white">t</span>
                  <span className="text-blue-400">o</span>
                  <span className="text-white">rnament</span>
                </h3>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Everything you need for esports competitions
              </p>
              <p className="text-gray-400 text-xs">
                © {currentYear} Toornament - All Rights Reserved
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Toornament Column */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-300">Toornament</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">For players & teams</a></li>
                <li><a href="#" className="hover:text-white transition">For tournament organizers</a></li>
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Features & Products Column */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-300">Features & products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Organizer software</a></li>
                <li><a href="#" className="hover:text-white transition">Tournament Boost</a></li>
                <li><a href="#" className="hover:text-white transition">Professional Circuit</a></li>
                <li><a href="#" className="hover:text-white transition">White-label Platform</a></li>
                <li><a href="#" className="hover:text-white transition">Developer API</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-300">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Case studies</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Help center</a></li>
                <li><a href="#" className="hover:text-white transition">Developer doc</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of use</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
