import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./Main";
import { PhotoAlbum } from "./PhotoAlbum";

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState([]);
  const [user, setUser] = useState({});

  //Загрузка пользователей
  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUsers(user);
      })
      .catch((err) => {
        console.log(`Данные о пользователях не получены. ${err}`);
      });
  }, []);
  //Загрузка альбомов
  useEffect(() => {
    api
      .getInitialAlbums(user.id)
      .then((albums) => {
        setAlbums(albums);
      })
      .catch((err) => {
        console.log(`Данные о альбомах не получены. ${err}`);
      });
  }, [user.id]);

  //Загрузка фото

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Main
              users={users}
              user={user}
              albums={albums}
              userClick={setUser}
              albumClick={setAlbum}
            />
          </Route>
          <Route path="/album/:albumId">
            <PhotoAlbum album={album} />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
