import { useContext } from "react";
import MovieList from "../Components/Cine/MovieList";
import SideBar from "../Components/SideBar";
import { ThemeContext } from "../context";
import Headers from "../Headers";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Headers />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MovieList />
        </div>
      </main>
    </div>
  );
};

export default Page;
