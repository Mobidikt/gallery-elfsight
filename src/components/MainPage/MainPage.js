import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main/Main";

export const MainPage = ({ users, user, albums, albumClick, userClick }) => {
  return (
    <>
      <Header />
      <Main
        users={users}
        user={user}
        albums={albums}
        albumClick={albumClick}
        userClick={userClick}
      />
      <Footer />
    </>
  );
};
