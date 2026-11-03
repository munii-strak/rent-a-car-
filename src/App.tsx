/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SILHOUETTES } from './data';
import { Silhouette, InventoryVehicle, AirportLocation, BookingSubmission } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BodyStyleSelector } from './components/BodyStyleSelector';
import { FeaturedInventory } from './components/FeaturedInventory';
import { DispatchTelemetry } from './components/DispatchTelemetry';
import { HowItWorks } from './components/HowItWorks';
import { BookingForm } from './components/BookingForm';
import { ProcessSteps } from './components/ProcessSteps';
import { Testimonials } from './components/Testimonials';
import { AirportLocations } from './components/AirportLocations';
import { ContactStrip } from './components/ContactStrip';
import { Footer } from './components/Footer';
import {
  VehicleDetailModal,
  ConfiguratorModal,
  VideoModal,
  AirportModal,
  SuccessModal,
} from './components/Modals';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedSilhouette, setSelectedSilhouette] = useState<Silhouette>(SILHOUETTES[0]);
  const [selectedVehicle, setSelectedVehicle] = useState<InventoryVehicle | null>(null);
  const [selectedAirport, setSelectedAirport] = useState<AirportLocation | null>(null);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  const scrollToReserve = () => {
    const el = document.getElementById('reserve');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEngineering = () => {
    const el = document.getElementById('engineering');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVehicleModalReserve = (vehicleName: string) => {
    setSelectedVehicle(null);
    scrollToReserve();
  };

  const handleConfiguratorLock = (configDetails: string) => {
    setIsConfiguratorOpen(false);
    scrollToReserve();
  };

  const handleAirportBook = (airportName: string) => {
    setSelectedAirport(null);
    scrollToReserve();
  };

  const handleBookingSuccess = (submission: BookingSubmission) => {
    setConfirmedBooking(submission);
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar
        onReserveClick={scrollToReserve}
        onExploreModels={scrollToEngineering}
      />

      {/* 2. Hero Section: Vorsteiner 500 */}
      <Hero
        onConfigureClick={() => setIsConfiguratorOpen(true)}
        onWatchFilmClick={() => setIsVideoModalOpen(true)}
        onDiscoverClick={scrollToEngineering}
      />

      {/* 3. Step 01: Select a Body Style Silhouettes */}
      <BodyStyleSelector
        selectedSilhouette={selectedSilhouette}
        onSelectSilhouette={setSelectedSilhouette}
        onContinue={() => setIsConfiguratorOpen(true)}
      />

      {/* 4. Featured Inventory Vehicles */}
      <FeaturedInventory
        onVehicleSelect={(car) => setSelectedVehicle(car)}
        onViewAllClick={scrollToReserve}
      />

      {/* 5. Dispatch Hub & Real-Time Telemetry Matrix */}
      <DispatchTelemetry />

      {/* 6. How It Works (Search, Select, Book) */}
      <HowItWorks />

      {/* 7. Ready for Departure — Lock Your Vehicle Now Form */}
      <BookingForm onSuccess={handleBookingSuccess} />

      {/* 8. Simple 4-Step Process — Renting a Car is Easy */}
      <ProcessSteps />

      {/* 9. Testimonials — Trusted by Travelers Across Pakistan */}
      <Testimonials />

      {/* 10. Airport Locations — We're Where You Land */}
      <AirportLocations
        onSelectAirport={(loc) => setSelectedAirport(loc)}
        onViewAllAirports={scrollToReserve}
      />

      {/* 11. Quick Contact Actions Strip */}
      <ContactStrip />

      {/* 12. Main Footer & SkyKey Executive Mobility Bar */}
      <Footer onBookNowClick={scrollToReserve} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onReserve={handleVehicleModalReserve}
      />

      <ConfiguratorModal
        silhouette={selectedSilhouette}
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        onLockReservation={handleConfiguratorLock}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <AirportModal
        location={selectedAirport}
        onClose={() => setSelectedAirport(null)}
        onBookAirport={handleAirportBook}
      />

      <SuccessModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
}
