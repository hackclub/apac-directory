import { ascend, difference, prop, sort, sortWith } from "ramda";
import { sortBy } from "lodash";
import { Nav } from "../../components";
import { Gallery, Hero, Stats, Team } from "../../components/club/index";

const Club_Page = ({ club_data, team_data, posts_data }) => {
  return (
    <>
      <Hero {...club_data}>
        <Nav />
      </Hero>
      <Stats {...club_data} />
      <Team team_data={team_data} />
      <Gallery posts_data={posts_data} />
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const {
    get_club_data,
    get_team_data,
    get_posts_data,
  } = require("../../lib/firebase/index");

  const club_data = await get_club_data(slug);
  const base_team_data = await get_team_data(slug);
  const posts_data = await get_posts_data(slug);

  const leads = sort(
    ascend(prop("name")),
    base_team_data.filter(({ is_lead }) => is_lead)
  );
  const members = sort(ascend(prop("name")), difference(base_team_data, leads));

  const team_data = [...leads, ...members];

  return {
    props: {
      club_data,
      team_data,
      posts_data,
    },
  };
};

export const getStaticPaths = async () => {
  const { get_all_paths } = require("../../lib/firebase/index");

  const all_routes = await get_all_paths();

  const paths = [];

  all_routes.forEach((slug) => paths.push({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default Club_Page;
