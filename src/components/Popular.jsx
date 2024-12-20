import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  async function getPopular() {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10`
      );
      const data = await api.json();
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  }

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-xl font-medium mb-4">Our Popular Picks</h1>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe, index) => (
          <SplideSlide key={index}>
            <div className="relative overflow-hidden">
              <Link to={"/recipe/" + recipe.id}>
                <h1 className="text-white w-full text-center p-2 absolute left-[0] bottom-[10%] text-m font-semibold z-20">
                  {recipe.title}
                </h1>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-xl w-full h-full"
                />
                <div className="w-full h-full absolute bottom-0 left-0 z-10 bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))] rounded-xl"></div>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
