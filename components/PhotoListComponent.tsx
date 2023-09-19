import React from "react";
import styles from "./PhotoListComponent.module.css";

const PhotoListComponent = ({ text, photoList }) => {
  return (
    <div className={`${styles.container} ${styles.size1} ${styles.size2}`}>
      <h1 className={styles.text}>PhotoListComponent from CSS Modules.</h1>
      <p>text: {text}</p>
      <ul className={styles.imageList}>
        {photoList.map((photo) => (
          <li className={styles.imageListItem} key={photo.id}>
            <img
              className={styles.image}
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoListComponent;
