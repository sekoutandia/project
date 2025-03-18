import React from 'react';

export default function TeamBuilder() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Team Builder</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Your Teams</h2>
          <div className="space-y-4">
            {/* Team list will be implemented here */}
            <p className="text-white/80">No teams created yet</p>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold transition-colors">
              Create New Team
            </button>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Pokémon Selection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Pokemon selection grid will be implemented here */}
          </div>
        </div>
      </div>
    </div>
  );
}