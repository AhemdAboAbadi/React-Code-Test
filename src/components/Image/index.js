/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./index.css";

const Image = ({ photo, isFav = false, setIsFavoriteStale }) => {
  const [isFavorite, setIsFavorite] = useState(isFav);
  const { id, url } = photo;

  const addToFavorites = () => {
    try {
      !isFavorite
        ? localStorage.setItem(
            "image",
            JSON.stringify([
              ...JSON.parse(localStorage.getItem("image") || []),
              {
                id,
                url,
              },
            ])
          )
        : localStorage.setItem(
            "image",
            JSON.stringify(
              JSON.parse(localStorage.getItem("image")).filter(
                (image) => image.id !== id
              )
            )
          );
      setIsFavoriteStale && setIsFavoriteStale((prev) => !prev);
      setIsFavorite((prev) => !prev);
    } catch (e) {
      setIsFavorite((prev) => !prev);
      localStorage.setItem("image", JSON.stringify([{ id, url }]));
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={url} alt="image" />
        <svg
          onClick={() => {
            addToFavorites();
          }}
          className={`card-image-heart  ${isFavorite && "favorite"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Image;
