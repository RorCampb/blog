"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "../../components/Hero";
import Link from "next/link"; // Import Link from next/link
import "../../styles/globals.css";

export default function ArtPage() {
  // Array of page images
  const pages = ["/page1.png", "/page2.png", "/page3.png", "/page4.png"];

  // State to manage current page index and modal visibility
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPageIndex(0); // Reset to show the first page when exiting
  };

  const goToPreviousPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex === 0 ? pages.length - 1 : prevIndex - 1,
    );
  };

  const goToNextPage = () => {
    setCurrentPageIndex((prevIndex) =>
      prevIndex === pages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#0080FF";
    document.body.style.height = "100vh";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="page-container">
      {/* Navbar with Hero Component */}
      <div className="artNavbar">
        <Link href="/" style={{ textDecoration: "none" }} passHref>
          {/* Wrap the hero text in a Link component */}
          <Hero />
          {/*
          <h1
            style={{
              fontFamily: "Courier New, monospace",
              textDecoration: "none", // Remove underline from the link
              cursor: "pointer", // Add cursor pointer to indicate it's clickable
            }}
            className="headerHero"
          >
            rorycampbell
          </h1>*/}
        </Link>
      </div>

      {/* Header */}
      <div className="header">
        <h1
          className="workHeader"
          style={{ fontFamily: "Courier New, monospace" }}
        >
          Art...:
        </h1>
      </div>

      {/* Images Section */}
      <div className="image-section">
        {!showModal ? (
          <Image
            src="/sketchCover.png"
            alt="Sketch Cover"
            width={300}
            height={300}
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={handleClick}
          />
        ) : (
          <Image
            src={pages[currentPageIndex]}
            alt={`Page ${currentPageIndex + 1} Image`}
            width={300}
            height={300}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      {/* Modal for the enlarged image */}
      {showModal && (
        <div className="modal">
          <div
            className="modal-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Image Container */}
            <Image
              src={pages[currentPageIndex]}
              alt={`Page ${currentPageIndex + 1} Enlarged`}
              width={600}
              height={600}
              style={{ objectFit: "contain" }}
            />

            {/* Navigation Buttons - Placed beneath the image */}
            <div
              className="navigation-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button onClick={goToPreviousPage}>Previous</button>
              <button onClick={closeModal}>Close</button>
              <button onClick={goToNextPage}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
