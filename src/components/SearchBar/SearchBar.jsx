import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";
import CSS from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter your search");
      return;
    }

    setIsSubmitting(true);
    await onSubmit(inputValue);
    setIsSubmitting(false);
  };

  return (
    <header className={CSS.header}>
      <Toaster />

      <form onSubmit={handleSubmit} className={CSS.form}>
        <div className={CSS.inputContainer}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={CSS.input}
          />
          <button
            type="submit"
            className={`${CSS.btn} ${isSubmitting ? CSS.submitting : ""}`}
          >
            <IoIosSearch className={CSS.icon} />
          </button>
        </div>
      </form>
    </header>
  );
}
