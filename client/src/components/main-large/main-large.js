import React from "react";

import styles from "./large.module.css";
import { IMAGE_URL } from "../../utils/constants";

export const MainLarge = ({ selectedTemplate, rotation }) => {
  if (selectedTemplate.length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.large}>
      <div className="group">
        <img
          style={{ transform: `rotate(${rotation}deg)` }}
          src={`${IMAGE_URL}?type=large&name=${selectedTemplate.image}`}
          alt="Large"
          width="430"
          height="360"
        />
        <div className={styles.details}>
          <p>
            <strong>Title</strong> {selectedTemplate.title}
          </p>
          <p>
            <strong>Description</strong> {selectedTemplate.decsription}
          </p>
          <p>
            <strong>Cost</strong> ${selectedTemplate.cost}
          </p>
          <p>
            <strong>ID #</strong> {selectedTemplate.id}
          </p>
          <p>
            <strong>Thumbnail File</strong> {selectedTemplate.thumbnail}
          </p>
          <p>
            <strong>Large Image File</strong> {selectedTemplate.image}
          </p>
        </div>
      </div>
    </div>
  );
};
