import { Nav } from "../components";
import { Hero, Stats, Team } from "../components/club/index";

const Club = () => {
  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <Stats />
      <Team />
    </>
  );
};

export default Club;
