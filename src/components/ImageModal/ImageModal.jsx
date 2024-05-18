import { useEffect } from "react";
import Modal from "react-modal";
import CSS from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
  imageAlt,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={CSS.modalWindow}
    >
      <div onClick={onRequestClose} style={{ position: "relative" }}>
        <img
          src={imageUrl}
          alt={imageAlt}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Modal>
  );
}
