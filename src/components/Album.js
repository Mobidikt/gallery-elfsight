import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/Api";

const Album = ({ album, onAlbumClick }) => {
  const [photos, setPhotos] = useState([]);
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
  const handleClickAlbum = () => {
    onAlbumClick(album);
  };
  const photo = photos[0];

  return (
    <Link
      onClick={handleClickAlbum}
      to={`/album/${album.id}`}
      className="album"
    >
      <img
        className="album__image"
        src={photo && photo.thumbnailUrl}
        alt={album.title}
      />
      <p className="album__title">{album.title}</p>
      <p className="album__count">{photos.length} фотографий</p>
    </Link>
  );
};
export default Album;
