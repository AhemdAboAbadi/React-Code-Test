import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import "./style.css";

const MyFavorites = () => {
  const [imagesFromLocalStorage, setImagesFromLocalStorage] = useState([]);
  const [isFavoriteStale, setIsFavoriteStale] = useState(false);

  useEffect(() => {
    setImagesFromLocalStorage(JSON.parse(localStorage.getItem("image")));
  }, [isFavoriteStale]);

  return (
    <>
      <h1>Favorite Images</h1>
      <div className="container">
        {imagesFromLocalStorage.map((image) => (
          <Image
            key={image.id}
            photo={image}
            isFav={true}
            setIsFavoriteStale={setIsFavoriteStale}
          />
        ))}
      </div>
      <button>
        <Link to="/">Go to Home</Link>
      </button>
    </>
  );
};

export default MyFavorites;
