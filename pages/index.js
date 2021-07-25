import { darken } from "@theme-ui/color";
import { Box } from "theme-ui";
import { Nav, Hero, Intro, Search, Leaderboard } from "../components/index";

const Page = () => {
  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <Intro />
      <Search />
      <Leaderboard />
    </>
  );
};

export default Page;
