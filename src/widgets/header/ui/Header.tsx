import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 items-center bg-slate-200 h-12 ">
      <button onClick={() => navigate("/")}>
        <CaretLeft width={20} height={20} />
      </button>
      <h1 className="font-mono font-bold">Movies App</h1>
      <div className="w-20"></div>
    </div>
  );
}
