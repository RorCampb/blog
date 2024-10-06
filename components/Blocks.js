"use client"; // Mark this component as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import "../styles/globals.css";

export default function BlockWithImage() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Handle the click event to navigate to /work
  const handleClick = () => {
    router.push("/work"); // Programmatic navigation to /work page
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={styles.container}>
      <Image
        src="/Untitled-1.png" // image is located in the public folder
        alt="Untitled Image"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        width={500} // adjust width as needed
        height={300} // adjust height as needed
        style={{
          ...styles.image,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // centers the image horizontally
    alignItems: "center", // centers the image vertically if the parent div has height
    height: "auto",
    backgroundColor: "transparent", // optional: adds a background color to the block
    paddingTop: "10vh",
    paddingBottom: "8vh",
  },
  image: {
    cursor: "pointer", // Makes it clear that the image is clickable
  },
};
