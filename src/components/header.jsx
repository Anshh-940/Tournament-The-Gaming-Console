import React, { useState } from "react";

export default function Header() {
  const [playersDropdown, setPlayersDropdown] = useState(false);
  const [organizersDropdown, setOrganizersDropdown] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#2d3561] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <img src="/logo.png" alt="Toornament" className="h-10" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 flex-1">
          {/* For Players Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPlayersDropdown(true)}
            onMouseLeave={() => setPlayersDropdown(false)}
          >
            <button className="text-blue-400 hover:text-blue-300 transition flex items-center space-x-1">
              <span>For players and teams</span>
              <span className="text-xs">▼</span>
            </button>
            
            {playersDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded-lg shadow-2xl w-96 p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Play</h3>
                    <p className="text-gray-600 text-sm">Thousands of tournaments every week, on all the best games, for all playing levels</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm border-t pt-4">
                  <a href="#" className="block text-gray-700 hover:text-blue-500">Help center</a>
                  <a href="#" className="block text-gray-700 hover:text-blue-500">Community Discord</a>
                  <a href="#" className="block text-gray-700 hover:text-blue-500">Blog</a>
                </div>
              </div>
            )}
          </div>
          
          {/* For Organizers Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOrganizersDropdown(true)}
            onMouseLeave={() => setOrganizersDropdown(false)}
          >
            <button className="hover:text-blue-400 transition flex items-center space-x-1">
              <span>For tournament organizers</span>
              <span className="text-xs">▼</span>
            </button>
            
            {organizersDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white text-gray-800 rounded-lg shadow-2xl w-[500px] p-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column - Features */}
                  <div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Organizer software</h4>
                          <p className="text-gray-600 text-xs">Free online software to manage your gaming competitions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Tournament Boost</h4>
                          <p className="text-gray-600 text-xs">Advanced organizer's features for your tournament</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Professional Circuit</h4>
                          <p className="text-gray-600 text-xs">Upgrade your competition project and manage circuits</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">White-label Platform</h4>
                          <p className="text-gray-600 text-xs">Customizable gaming platform on your domain name</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Developer API</h4>
                          <p className="text-gray-600 text-xs">Create your own custom projects for your game or community</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Links */}
                  <div className="space-y-2 text-sm border-l pl-6">
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Pricing</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Case studies</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Blog</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Help center</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Developer doc</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">About us</a>
                    <a href="#" className="block text-gray-700 hover:text-blue-500">Contact</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block border-2 border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition">
            Play
          </button>
          <button className="hidden md:block border-2 border-blue-400 text-blue-400 px-6 py-2 rounded hover:bg-blue-400 hover:text-white transition">
            Organize
          </button>
        </div>
      </div>
    </header>
  );
}
