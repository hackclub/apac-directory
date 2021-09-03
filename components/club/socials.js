/**@jsxImportSource theme-ui*/

import { Box, Flex } from "theme-ui";

const Socials = ({
  twitter,
  linkedin,
  instagram,
  github,
  website,
  ...props
}) => {
  const social_props = { twitter, github, website, instagram, linkedin };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        mb: [1],
      }}
      {...props}
    >
      {create_list(social_props).map(({ img_url, href }, idx) => (
        <Icon img_url={img_url} href={href} key={idx} />
      ))}
    </Flex>
  );
};

const Icon = ({ img_url, ...props }) => {
  return (
    <Box as="a" {...props} sx={{ mx: [2] }}>
      <img
        alt="icon"
        src={img_url}
        sx={{
          width: [40, 48],
          height: [40, 48],
        }}
      />
    </Box>
  );
};

const create_list = (social_props) => {
  const keys = Object.keys(social_props).filter((key) => social_props[key]);

  return keys.map((key) => ({ img_url: data[key], href: social_props[key] }));
};

const data = {
  twitter:
    "https://cloud-aupp4896s-hack-club-bot.vercel.app/0icons8-twitter-circled-144.png",
  website:
    "https://cloud-6vlxfvh8y-hack-club-bot.vercel.app/0icons8-website-96.png",
  linkedin:
    "https://cloud-14xsvnowt-hack-club-bot.vercel.app/3icons8-linkedin-144.png",
  instagram:
    "https://cloud-14xsvnowt-hack-club-bot.vercel.app/2icons8-instagram-logo-144.png",
  github:
    "https://cloud-14xsvnowt-hack-club-bot.vercel.app/0icons8-github-144.png",
};

export default Socials;
