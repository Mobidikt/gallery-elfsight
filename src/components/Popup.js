import React from "react";

function Popup({ photos, image, onClose, isOpen, editImage }) {
  const open = isOpen && "popup_opened";
  let number = "";
  let picture = image;
  for (let i = 0; i < photos.length; i++) {
    if (photos[i] === picture) {
      number = i;
    }
  }
  let classNextButton = `popup__button popup__button_next ${
    photos.length - 1 === number ? "popup__button_hidden" : ""
  }`;
  let classEarlyButton = `popup__button popup__button_early ${
    number === 0 ? "popup__button_hidden" : ""
  }`;
  const handleClickClose = () => {
    onClose();
  };
  const handleEarlyClose = () => {
    number = number - 1;
    editImage(number);
  };
  const handleNextClose = () => {
    number = number + 1;
    editImage(number);
  };
  return (
    <div className={`popup ${open}`}>
      <div className="popup__container">
        <div className="popup__wrapper">
          <button
            className={classEarlyButton}
            onClick={handleEarlyClose}
          ></button>
          <img
            className="popup__picture"
            src={picture ? picture.url : "#"}
            alt={picture ? picture.title : ""}
          />
          <button
            className={classNextButton}
            onClick={handleNextClose}
          ></button>
        </div>
        <h3 className="popup__caption">{picture ? picture.title : ""}</h3>
        <button
          type="button"
          className="popup__close"
          onClick={handleClickClose}
        />
      </div>
    </div>
  );
}
export default Popup;
