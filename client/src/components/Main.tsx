import type { FC } from "react";
import HeroShowcase from "./HeroShowcase";
import Destacados from "../views/generalviews/Destacados";

const Main: FC = () => {
  return (
    <div className="w-full">
      <HeroShowcase />
      <Destacados />
    </div>
  );
};

export default Main;
