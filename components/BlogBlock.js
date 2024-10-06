// components/BlogBlock.js
"use client";
import styles from "../styles/BlogBlock.module.css"; // Import BlogBlock styles

export default function BlogBlock({
  title,
  description,
  desktopBackgroundColor,
  desktopTextColor,
  mobileTextColor,
  content,
}) {
  return (
    <div
      className={styles.blogBlock}
      style={{
        backgroundColor: desktopBackgroundColor,
        color: desktopTextColor,
      }}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Full Content */}
      <div className={styles.content}>{content}</div>
    </div>
  );
}
