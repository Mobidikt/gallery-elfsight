import React from "react";
import "./Photo.css";

export const Photo = ({ photo, onClickPhoto }) => {
  function handleClick() {
    onClickPhoto(photo);
  }
  return (
    <div className="photo">
      <img
        className="photo__image"
        src={photo.thumbnailUrl}
        alt={photo.title}
        onClick={handleClick}
      />
      <p className="photo__title">{photo.title}</p>
    </div>
  );
};
