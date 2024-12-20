import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="flex justify-center gap-8 mb-8">
      <NavLink
        to={"/cuisine/Italian"}
        className={({ isActive }) =>
          `w-20 h-20 flex flex-col justify-center items-center gap-1 rounded-full ${
            isActive
              ? "bg-[linear-gradient(to_right,_#f27121,_#e94057)]"
              : "bg-[#333]"
          }`
        }
      >
        <FaPizzaSlice className="inline text-white" />
        <h4 className="text-[12px] text-white">Italian</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/American"}
        className={({ isActive }) =>
          `w-20 h-20 flex flex-col justify-center items-center gap-1 rounded-full ${
            isActive
              ? "bg-[linear-gradient(to_right,_#f27121,_#e94057)]"
              : "bg-[#333]"
          }`
        }
      >
        <FaHamburger className="inline text-white" />
        <h4 className="text-[12px] text-white">American</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Thai"}
        className={({ isActive }) =>
          `w-20 h-20 flex flex-col justify-center items-center gap-1 rounded-full ${
            isActive
              ? "bg-[linear-gradient(to_right,_#f27121,_#e94057)]"
              : "bg-[#333]"
          }`
        }
      >
        <GiNoodles className="inline text-white" />
        <h4 className="text-[12px] text-white">Thai</h4>
      </NavLink>

      <NavLink
        to="/cuisine/Japanese"
        className={({ isActive }) =>
          `w-20 h-20 flex flex-col justify-center items-center gap-1 rounded-full ${
            isActive
              ? "bg-[linear-gradient(to_right,_#f27121,_#e94057)]"
              : "bg-[#333]"
          }`
        }
      >
        <GiChopsticks className="inline text-white" />
        <h4 className="text-[12px] text-white">Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
