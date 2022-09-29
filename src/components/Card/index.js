import Image from "../Image";
import "./style.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card">
        {data.photo.map((photo) => {
          return (
            <Image
              key={photo.id}
              photo={photo}
              isFav={JSON.parse(localStorage.getItem("image"))?.find(
                (image) => image.id === photo.id
              )}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;
