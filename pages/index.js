import { useState } from "react";
import { Meta } from "../components/index";

import { Nav, Hero, Intro, Search, Leaderboard } from "../components/index";

const Page = ({ ...props }) => {
  const [data, set_data] = useState(props.data);

  return (
    <>
      <Meta />
      <Hero>
        <Nav />
      </Hero>
      <Intro />
      <Search original_data={props.data} set_data={set_data} />
      <Leaderboard data={data} original_data={props.data} />
    </>
  );
};

export const getStaticProps = async () => {
  const { get_all_clubs } = require("../lib/firebase/index");

  const is_prod = process.env.PROD == "true";
  const data = (await get_all_clubs()).filter(({ path }) => {
    if (is_prod && path == "apac") return false;

    return true;
  });

  return {
    props: { data },
  };
};

export default Page;
