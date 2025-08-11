
import React from "react";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSections";
import HeaderSection from "./components/HeaderSection";
import MeetTheDogsSection from "./components/MeetTheDogsSection";
import GetInvolvedSection from "./components/GetInvolvedSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DonationSection from "./components/DonationSection";
import ContactNLocationSection from "./components/ContactNLocationSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="bg-background">
      <div className="bg-gradient-to-b from-[#D0A376]/20 via-background to-background">

        <div className="pt-4">
          <Navbar />
        </div>
        <div id="home">
          <HeaderSection />
        </div>
      </div>
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="dogs">
        <MeetTheDogsSection />
      </div>
      <div id="involved">
        <GetInvolvedSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="donate">
        <DonationSection />
      </div>
      <div id="contact">
        <ContactNLocationSection />
      </div>
      <FooterSection />
    </div>
  );
}