import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notFound">
      <p className="notFound-note">
        Такой страницы нет. Вернутся на{" "}
        <Link className="notFound-link" to="/">
          главную
        </Link>
        .
      </p>
    </div>
  );
};
