
import React from "react";

export default function Tournaments() {
  const tournaments = [
    {
      id: 1,
      name: "Summer Championship 2024",
      game: "Valorant",
      participants: 32,
      prize: "$10,000",
      status: "Open",
      date: "July 15, 2024",
      image: "/valorant.jpg",
    },
    {
      id: 2,
      name: "CS2 Global Clash",
      game: "Counter-Strike 2",
      participants: 16,
      prize: "$5,000",
      status: "Closed",
      date: "August 2, 2024",
      image: "/cs2.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Featured Tournaments</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold">{tournament.name}</h3>
                <p className="text-gray-500 mb-2">{tournament.game}</p>
                <p>Participants: {tournament.participants}</p>
                <p>Prize: {tournament.prize}</p>
                <p>Status: {tournament.status}</p>
                <p className="text-sm text-gray-400 mt-2">{tournament.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
