import ImageCard from "../ImageCard/ImageCard.jsx";
import CSS from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <div className={CSS.listContainer}>
      <ul className={CSS.list}>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => onImageClick(image)}
            className={CSS.listItem}
          >
            <ImageCard src={image.smallUrl} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
