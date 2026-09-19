/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { SkillsAndEducation } from './components/SkillsAndEducation';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState('ecommerce');

  const handleOpenConsultation = (serviceId: string = 'ecommerce') => {
    setSelectedServiceForConsultation(serviceId);
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-cyan-400 selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Top Global Ambient Atmosphere Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-500/10 via-teal-500/5 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-t from-lime-500/10 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* Header & Navigation */}
      <Header onOpenConsultation={() => handleOpenConsultation('ecommerce')} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section (3D Animated Look) */}
        <Hero onOpenConsultation={() => handleOpenConsultation('ecommerce')} />

        {/* Core Services (3D Card Layout: E-commerce & Social Media) */}
        <CoreServices onSelectService={(serviceId) => handleOpenConsultation(serviceId)} />

        {/* Featured Projects (3D Showcase Cards: Shopify, Instagram, YouTube) */}
        <FeaturedProjects onOpenConsultation={() => handleOpenConsultation('ecommerce')} />

        {/* About Shamim (Workflow & Specializations) */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation('ecommerce')} />

        {/* Skills, Software Stack & Education Background */}
        <SkillsAndEducation />

        {/* Why Choose Me (Efficiency, Creativity, Data-Driven) */}
        <WhyChooseMe />

        {/* Client Testimonials (3D Star Ratings & Floating Glass Cards) */}
        <Testimonials />
      </main>

      {/* Footer Section (Metallic Base, Neon Glow, 3D Socials, Contact Form) */}
      <Footer />

      {/* Interactive 3D Consultation & Discovery Call Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
        initialService={selectedServiceForConsultation}
      />

    </div>
  );
}
