import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <form className="relative w-[60%] mx-auto mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-none text-lg text-white py-4 px-8 outline-none rounded-2xl bg-[#333] w-full"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <FaSearch className="absolute right-5 top-5 text-white text-lg" />
    </form>
  );
}

export default Search;
