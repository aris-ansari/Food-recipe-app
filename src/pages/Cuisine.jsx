import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  async function getCuisine(name) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item, index) => (
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
    </motion.div>
  );
}

export default Cuisine;
