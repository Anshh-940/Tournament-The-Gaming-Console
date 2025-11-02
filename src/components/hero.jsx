import React from "react";

export default function Hero() {
  const games = [
    { name: "LEAGUE OF LEGENDS", image: "/game1.jpeg" },
    { name: "COUNTER STRIKE 2", image: "/Game2.jpeg" },
    { name: "FC 25", image: "/game3.jpeg" },
    { name: "MOBILE LEGENDS", image: "/game4.jpeg" },
    { name: "FORTNITE", image: "/game5.jpeg" },
    { name: "VALORANT", image: "/game6.jpeg" },
    { name: "PUBG MOBILE", image: "/game7.jpeg" },
    { name: "ROCKET LEAGUE", image: "/game8.jpeg" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2a2f5f] via-[#3d3768] to-[#4a2d5f] text-white pt-32 pb-20">
      {/* Hero Title */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 flex items-center justify-center">
          <span className="text-white" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '900' }}>t</span>
          <img src="/logo.png" alt="o" className="h-16 md:h-20 mx-1 inline-block" />
          <span className="text-white" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '900' }}>rnament</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-90 font-light">
          Everything you need for esports competitions
        </p>
      </div>

      {/* Game Cards - Single Row with uniform sizing */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden group cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl flex-shrink-0"
              style={{ width: '170px', height: '220px' }}
            >
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end">
                <h3 className="text-white font-bold text-xs p-3 w-full leading-tight">
                  {game.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* All Competitions Button */}
        <div className="text-center">
          <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded text-lg font-medium hover:bg-blue-400 hover:text-white transition-all">
            All competitions and games
          </button>
        </div>
      </div>
    </section>
  );
}
