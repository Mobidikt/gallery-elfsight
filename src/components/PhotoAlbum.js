import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/Api";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Photo } from "./Photo";
import Popup from "./Popup";

export const PhotoAlbum = ({ album }) => {
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(null);
  const [isPopup, setPopup] = useState(false);

  function editImage(num) {
    setImage(photos[num]);
  }

  function handleEsc(e) {
    if (e.key === "Escape") {
      closePopup();
    }
  }
  function overlayClose(e) {
    if (e.target.classList.contains("popup")) {
      closePopup();
    }
  }
  function setEventListeners() {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", overlayClose);
  }
  function handleClickPhoto(photo) {
    setImage(photo);
    setPopup(true);
    setEventListeners();
  }
  function closePopup() {
    setPopup(false);
    document.removeEventListener("keydown", handleEsc);
    document.removeEventListener("click", overlayClose);
  }
  useEffect(() => {
    api
      .getInitialPhoto(album.id)
      .then((photos) => {
        setPhotos(photos);
      })
      .catch((err) => {
        console.log(`Данные о фото не получены. ${err}`);
      });
  }, [album.id]);
  return (
    <>
      <Header />
      <h2 className="photos__title">Фотографии альбома {album.title}</h2>
      <div className="photos__list">
        <Link className="photos__button" to="/">
          Вернуться к списку албомов
        </Link>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} onClickPhoto={handleClickPhoto} />
        ))}
        <Popup
          photos={photos}
          isOpen={isPopup}
          image={image}
          editImage={editImage}
          onClose={closePopup}
        />
      </div>
      <Footer />
    </>
  );
};
