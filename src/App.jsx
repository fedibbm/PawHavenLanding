
import React from "react";
import Navbar from "./components/Navbar";
import AboutUsSection from "./components/AboutUsSections";
import HeaderSection from "./components/HeaderSection";
import MeetTheDogsSection from "./components/MeetTheDogsSection";
import GetInvolvedSection from "./components/GetInvolvedSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DonationSection from "./components/DonationSection";
import ContactNLocationSection from "./components/ContactNLocationSection";

export default function App() {
  return (
    <div className="bg-[#f6e6d7] ">
      <Navbar />
      <div id="home">
        <HeaderSection />
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
    </div>
  );
}