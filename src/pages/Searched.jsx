import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  async function getSearched(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {searched.map((item, index) => (
        <div key={index}>
          <Link to={"/recipe/" + item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-2xl w-full"
            />
            <h4 className="text-center text-sm mt-2">{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Searched;
