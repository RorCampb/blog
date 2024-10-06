// components/Hero.js
"use client"; // Ensure this is a client component
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Clock from "./Clock";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  // Use effect to set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="hero" role="banner" aria-label="Site Header">
      <h1 className="hero-text">Rory Campbell</h1>
      {isClient && <Clock />} {/* Render Clock only on the client side */}
    </header>
  );
};

export default Hero;
