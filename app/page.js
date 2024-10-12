"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import "../styles/globals.css";

export default function Home() {
  const pages = [
    "/page1.png",
    "/page2.png",
    "/page3.png",
    "/page4.png",
    "/page5.png",
    "/page6.png",
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPageIndex(0);
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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    document.body.style.height = "100vh";

    // Dynamic title based on modal state
    document.title = showModal
      ? `Viewing Page ${currentPageIndex + 1}`
      : "rorycampbell";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [showModal, currentPageIndex]);

  return (
    <>
      <Head>
        <title>rorycampbell</title>
        <meta name="description" content="some stuff I like" />
      </Head>
      <div>
        <Hero />
      </div>
      <div className="sketch-cover-container">
        {!showModal ? (
          <Image
            src="/sketchCover.png"
            alt="Sketch Cover"
            width={300}
            height={300}
            className={`sketch-cover-image ${isHovered ? "hovered" : ""}`}
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
            className="modal-image"
          />
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <Image
              src={pages[currentPageIndex]}
              alt={`Page ${currentPageIndex + 1} Enlarged`}
              width={500}
              height={500}
              className="modal-image"
              onClick={closeModal}
            />
            <div className="nav-buttons">
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
