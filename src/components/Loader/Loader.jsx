import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}
