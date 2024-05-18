import CSS from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  const handleClick = async () => {
    await onClick();
    scrollToBottom();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={handleClick} className={CSS.loadMore}>
      Load more
    </button>
  );
}
