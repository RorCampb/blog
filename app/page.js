"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import Blocks from "../components/Blocks";
import Blog from "../components/Blog";
import "../styles/globals.css";

export default function Home() {
  // Array of page images for the modal
  const pages = ["/page1.png", "/page2.png", "/page3.png", "/page4.png"];

  // State to manage current page index and modal visibility
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Open modal
  const handleClick = () => {
    setShowModal(true);
  };

  // Close modal and reset the current page
  const closeModal = () => {
    setShowModal(false);
    setCurrentPageIndex(0);
  };

  // Navigate between pages in modal
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Set background color and height for the body
  useEffect(() => {
    document.body.style.height = "100vh";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sketch Cover Image */}
      <div style={styles.container}>
        {!showModal ? (
          <Image
            src="/sketchCover.png"
            alt="Sketch Cover"
            width={300}
            height={300}
            style={{
              ...styles.image,
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s",
            }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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

      {/* Modal for the enlarged images */}
      {showModal && (
        <div className="modal" style={styles.modal}>
          <div className="modal-content" style={styles.modalContent}>
            <Image
              src={pages[currentPageIndex]}
              alt={`Page ${currentPageIndex + 1} Enlarged`}
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
            <div className="navigation-buttons" style={styles.navButtons}>
              <button onClick={goToPreviousPage}>Previous</button>
              <button onClick={closeModal}>Close</button>
              <button onClick={goToNextPage}>Next</button>
            </div>
          </div>
        </div>
      )}
      <Blog />
    </>
  );
}

// Styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Centers the sketch cover image horizontally
    alignItems: "center", // Centers the image vertically
    height: "50vh", // Adjust height to center the image within the page
    backgroundColor: "transparent",
    paddingTop: "35vh",
    paddingBottom: "15vh",
  },
  image: {
    cursor: "pointer",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
};
