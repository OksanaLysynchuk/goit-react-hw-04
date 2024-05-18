import ImageCard from "../ImageCard/ImageCard.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import CSS from "./ImageGallery.module.css";

export default function ImageGallery({
  images,
  isLoading,
  error,
  onLoadMore,
  onImageClick,
}) {
  if (images.length === 0) {
    return null;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className={CSS.listContainer}>
      <ul className={CSS.list}>
        {images.map((image) => (
          <li key={image.id} onClick={() => onImageClick(image)}>
            <ImageCard src={image.smallUrl} alt={image.alt} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={onLoadMore} />}
    </div>
  );
}
