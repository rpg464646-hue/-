import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveTables } from './components/LiveTables';
import { MatchmakingBoard } from './components/MatchmakingBoard';
import { TaiCalculator } from './components/TaiCalculator';
import { LoungeMenu } from './components/LoungeMenu';
import { PricingAndRules } from './components/PricingAndRules';
import { AboutAndLocation } from './components/AboutAndLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { INITIAL_TABLES, INITIAL_GAMES, MENU_ITEMS } from './data/parlorData';
import { MahjongTable, GamePost, RoomType } from './types';

export default function App() {
  const [tables, setTables] = useState<MahjongTable[]>(INITIAL_TABLES);
  const [games, setGames] = useState<GamePost[]>(INITIAL_GAMES);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTableForBooking, setSelectedTableForBooking] = useState<MahjongTable | null>(null);
  const [initialBookingTimeSlot, setInitialBookingTimeSlot] = useState<string>('20:00');
  const [activeSection, setActiveSection] = useState<string>('tables');

  // Trigger booking from Hero with pre-selected room type & time
  const handleQuickBook = (roomType: RoomType, timeSlot: string) => {
    const match = tables.find((t) => t.roomType === roomType) || tables[0];
    setSelectedTableForBooking(match);
    setInitialBookingTimeSlot(timeSlot);
    setIsBookingOpen(true);
  };

  // Trigger booking for a specific table from Live Tables
  const handleSelectTableForBooking = (table: MahjongTable) => {
    setSelectedTableForBooking(table);
    setInitialBookingTimeSlot('20:00');
    setIsBookingOpen(true);
  };

  // Trigger general booking modal
  const handleOpenGeneralBooking = () => {
    setSelectedTableForBooking(tables[0]);
    setIsBookingOpen(true);
  };

  // Join game in matchmaking board
  const handleJoinGame = (gameId: string, playerName: string) => {
    setGames((prev) =>
      prev.map((g) => {
        if (g.id === gameId && g.currentPlayers < g.targetPlayers) {
          return {
            ...g,
            currentPlayers: g.currentPlayers + 1,
            signedUpUsers: [...g.signedUpUsers, playerName],
          };
        }
        return g;
      })
    );
  };

  // Create new game in matchmaking board
  const handleCreateGame = (newGameData: Omit<GamePost, 'id' | 'signedUpUsers' | 'currentPlayers'>) => {
    const newPost: GamePost = {
      ...newGameData,
      id: `game-${Date.now()}`,
      currentPlayers: 1,
      signedUpUsers: [newGameData.hostName],
    };
    setGames((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans-main selection:bg-amber-500 selection:text-stone-950">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section with High-Impact Atmosphere & Quick Booking */}
        <Hero
          onQuickBook={handleQuickBook}
          onExploreTables={() => {
            document.getElementById('tables')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Live Table Availability & Rooms Showcase */}
        <LiveTables
          tables={tables}
          onSelectTableForBooking={handleSelectTableForBooking}
        />

        {/* Real-time Matchmaking Board ("三缺一揪牌牆") */}
        <MatchmakingBoard
          games={games}
          onJoinGame={handleJoinGame}
          onCreateGame={handleCreateGame}
        />

        {/* Taiwan 16-Tile Tai Calculator */}
        <TaiCalculator />

        {/* Parlor Food & Drink Table-Ordering Menu */}
        <LoungeMenu menuItems={MENU_ITEMS} />

        {/* Pricing Tiers, Stored-Value & House Regulations */}
        <PricingAndRules onBookNow={handleOpenGeneralBooking} />

        {/* Venue Story, Location, Directions & FAQ */}
        <AboutAndLocation />
      </main>

      {/* Quiet, Compliant Footer */}
      <Footer />

      {/* Table Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tables={tables}
        initialSelectedTable={selectedTableForBooking}
        initialTimeSlot={initialBookingTimeSlot}
      />
    </div>
  );
}
