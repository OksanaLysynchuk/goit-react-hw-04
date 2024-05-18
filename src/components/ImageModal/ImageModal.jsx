import { useEffect } from "react";
import Modal from "react-modal";

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
      //   style={{
      //     overlay: {
      //       backgroundColor: "rgba(0, 0, 0, 0.75)",
      //     },
      //     content: {
      //       top: "50%",
      //       left: "50%",
      //       right: "auto",
      //       bottom: "auto",
      //       marginRight: "-50%",
      //       transform: "translate(-50%, -50%)",
      //       padding: "0",
      //       border: "none",
      //       background: "transparent",
      //     },
      //   }}
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
