import React from 'react';
import { useBattleStore } from '../store/battleStore';

export default function Battle() {
  const { playerTeam, opponentTeam, currentPokemon, opponentPokemon } = useBattleStore();

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Battle Arena</h1>
      
      {!playerTeam ? (
        <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg">
          <p className="text-xl mb-4">Select a team to start battling!</p>
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold transition-colors">
            Choose Team
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Your Team</h2>
            {/* Team display will be implemented here */}
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Opponent</h2>
            {/* Opponent display will be implemented here */}
          </div>
        </div>
      )}
    </div>
  );
}