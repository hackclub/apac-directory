import { useState } from "react";
import { darken } from "@theme-ui/color";
import { Box } from "theme-ui";

import { Nav, Hero, Intro, Search, Leaderboard } from "../components/index";

const Page = ({ ...props }) => {
  const [data, set_data] = useState(props.data);

  return (
    <>
      <Hero>
        <Nav />
      </Hero>
      <Intro />
      <Search original_data={props.data} set_data={set_data} />
      <Leaderboard data={data} />
    </>
  );
};

export const getStaticProps = async () => {
  const { get_all_clubs } = require("../lib/firebase/index");

  const data = await get_all_clubs();

  console.log(data);

  return {
    props: { data },
  };
};

export default Page;
