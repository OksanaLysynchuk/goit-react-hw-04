import { useState, useEffect } from "react";

import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (query, page) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query,
            page,
            per_page: 15,
          },
          headers: {
            Authorization: `Client-ID yRgzzKjwsHP9IbmfLrWTVSVCGLag4qcCavdoO3LBqvk`,
          },
        }
      );

      const newImages = response.data.results.map((image) => ({
        id: image.id,
        smallUrl: image.urls.small,
        regularUrl: image.urls.regular,
        alt: image.alt_description || "Image",
      }));

      setImages((prevImages) => [...prevImages, ...newImages]);
    } catch (err) {
      setError("Failed to load images.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query === "") return;

    fetchImages(query, page);
  }, [page, query]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <header>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        error={error}
        onLoadMore={handleLoadMore}
        onImageClick={openModal}
      />
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage ? selectedImage.regularUrl : ""}
        imageAlt={selectedImage ? selectedImage.alt : ""}
      />
      <Toaster />
    </header>
  );
}

export default App;
