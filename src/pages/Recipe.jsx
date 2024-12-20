import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  async function getRecipe() {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await api.json();
    setRecipe(data);
  }

  useEffect(() => {
    getRecipe();
  }, [params.name]);

  return (
    <div className="flex justify-center p-4">
      <div className="w-1/2">
        <h2 className="mb-4 text-lg font-semibold">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-[360px]" />
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <button
            className={`border-[#333] border-2 py-2 px-4 text-sm ${
              activeTab === "instructions" ? "bg-[#333] text-white" : ""
            }`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={`border-[#333] border-2 py-2 px-4 mx-4 text-sm ${
              activeTab === "ingredients" ? "bg-[#333] text-white" : ""
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>

        {activeTab === "instructions" ? (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
              className="text-sm my-4"
            />
            <h3
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
              className="text-sm my-4"
            />
          </div>
        ) : (
          <ul>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <li key={index} className="text-sm my-3 list-disc ml-4">
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
