import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CSS from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter your search");
      return;
    }
    onSubmit(inputValue);
  };
  return (
    <header className={CSS.header}>
      <Toaster />
      <form onSubmit={handleSubmit} className={CSS.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
