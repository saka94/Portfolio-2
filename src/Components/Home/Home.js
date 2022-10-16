import { FeaturedProjects } from "./FeaturedProjects/FeaturedProjects";
import Herobanner from "./HeroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <main>
        <Herobanner />
        <FeaturedProjects />
      </main>
    </>
  );
}
