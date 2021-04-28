import React from "react";
import styles from "./thumbnails.module.css";
import { IMAGE_URL } from "../../utils/constants";

export const Thumbnails = ({
  showThumbnails,
  onChangeSelected,
  onChangeStart,
  selectedIndex,
  leftDisable,
  rightDisable
}) => {
  if (showThumbnails.length === 0) {
    return <div>Loading ... </div>;
  }

  const leftArrowStyle = leftDisable ? null : styles.disabled;
  const rightArrowStyle = rightDisable ? null : styles.disabled;
  return (
    <div className={styles.thumbnails}>
      <div className="group">
        {showThumbnails.map((thumbnail, id) => {
          return (
            <a
              key={thumbnail.id}
              href="#/"
              className={id === selectedIndex ? styles.active : ""}
              title={thumbnail.id}
              onClick={() => onChangeSelected(id)}
            >
              <img
                src={`${IMAGE_URL}?type=thumbnails&name=${thumbnail.thumbnail}`}
                //todo should be image name not id
                alt={thumbnail.id}
                width="145"
                height="121"
              />
              <span>{thumbnail.id}</span>
            </a>
          );
        })}

        <span
          className={`${styles.previous} ${leftArrowStyle}`}
          title="Previous"
          onClick={() => onChangeStart("left")}
        >
          Previous
        </span>
        <a
          href="#/"
          className={` ${styles.next} ${rightArrowStyle}`}
          title="Next"
          onClick={() => onChangeStart("right")}
        >
          Next
        </a>
      </div>
    </div>
  );
};
