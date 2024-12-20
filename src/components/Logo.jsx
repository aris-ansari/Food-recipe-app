import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to={"/"} className="flex justify-start items-center gap-1 w-fit">
            <GiKnifeFork className="text-2xl"/>
            <span className="font-[cursive] font-semibold">Tasty Food</span>
        </Link>
    )
}

export default Logo;