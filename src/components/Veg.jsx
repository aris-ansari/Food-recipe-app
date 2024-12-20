import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veg() {
  const [veg, setVeg] = useState([]);

  async function getVeg() {
    const check = localStorage.getItem("veg");
    if (check) {
      setVeg(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=10&tags=vegetarian`
      );
      const data = await api.json();
      setVeg(data.recipes);
      localStorage.setItem("veg", JSON.stringify(data.recipes));
    }
  }

  useEffect(() => {
    getVeg();
  }, []);

  return (
    <div className="mb-12">
      <h1 className="text-xl font-medium mb-4">Our Vegetarian Picks</h1>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veg.map((recipe, index) => (
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

export default Veg;
