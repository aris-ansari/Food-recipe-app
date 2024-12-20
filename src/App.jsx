import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="py-[2.5%] px-[10%]">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
