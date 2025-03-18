import { create } from 'zustand';
import type { Pokemon, Team } from '../types/pokemon';

interface BattleState {
  playerTeam: Team | null;
  opponentTeam: Team | null;
  currentPokemon: Pokemon | null;
  opponentPokemon: Pokemon | null;
  setPlayerTeam: (team: Team) => void;
  setOpponentTeam: (team: Team) => void;
  setCurrentPokemon: (pokemon: Pokemon) => void;
  setOpponentPokemon: (pokemon: Pokemon) => void;
}

export const useBattleStore = create<BattleState>((set) => ({
  playerTeam: null,
  opponentTeam: null,
  currentPokemon: null,
  opponentPokemon: null,
  setPlayerTeam: (team) => set({ playerTeam: team }),
  setOpponentTeam: (team) => set({ opponentTeam: team }),
  setCurrentPokemon: (pokemon) => set({ currentPokemon: pokemon }),
  setOpponentPokemon: (pokemon) => set({ opponentPokemon: pokemon }),
}));