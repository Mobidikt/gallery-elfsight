import React from "react";
import User from "../User/User";
import Album from "../Album/Album";
import "./Main.css";

export const Main = ({ users, user, albums, albumClick, userClick }) => {
  return (
    <main className="main">
      <section className="profiles">
        <h2 className="profiles__title">Список пользователей</h2>
        <ul className="profiles__list">
          {users.map((user) => (
            <User key={user.id} user={user} onUserClick={userClick} />
          ))}
        </ul>
      </section>
      <section className="albums">
        <h3 className="albums__title">
          Список альбомов пользователя {user.name}
        </h3>
        <div className="albums__list">
          {albums.map((album) => (
            <Album key={album.id} album={album} onAlbumClick={albumClick} />
          ))}
        </div>
      </section>
    </main>
  );
};
