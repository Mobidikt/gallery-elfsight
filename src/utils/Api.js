class Api {
  constructor({ serverUrl }) {
    this._serverUrl = serverUrl;
  }

  _fetch(url, params) {
    return fetch(this._serverUrl + url, params).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  //загрузка пользователей
  getUserInfo() {
    return this._fetch("/users", {
      method: "GET",
    });
  }
  //добавление альбомов
  getInitialAlbums(userId) {
    return this._fetch(`/albums?userId=${userId}`, {
      method: "GET",
    });
  }
  //запрос обложки
  getAlbumCover(albumId) {
    const photoId = 1 + (albumId - 1) * 50;
    return this._fetch(`/photos/${photoId}`, {
      method: "GET",
    });
  }
  //добавление фото
  getInitialPhoto(albumId) {
    return this._fetch(`/photos?albumId=${albumId}`, {
      method: "GET",
    });
  }
}
const api = new Api({
  serverUrl: "https://jsonplaceholder.typicode.com",
});
export default api;
