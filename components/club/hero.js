/**@jsxImportSource theme-ui*/

import { Box, Container, Flex } from "theme-ui";
import Image from "next/image";

import hc_logo_src from "../../public/hc_logo.png";

const Hero = ({ desc, logo, children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        backgroundColor: "purple",
        backgroundImage:
          "url(https://cloud-edrmgdnhx-hack-club-bot.vercel.app/0image.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pb: [5],
        position: "relative",
      }}
    >
      {children}
      <Notification desc={desc} />
      <Club_Logo logo={logo} />
    </Box>
  );
};

const Notification = ({ desc, ...props }) => {
  return (
    <Container
      sx={{
        backgroundColor: "rgba(248, 232, 232, 0.9)",
        color: "black",

        boxShadow: "0px 0px 10px grey",

        width: [280, 500],
        py: [1],
        px: [3, 4],
        borderRadius: [20],
        mt: [4],
        mb: [3],
      }}
      {...props}
    >
      <p sx={{ fontSize: [0, 1] }}>{desc}</p>
    </Container>
  );
};

const Club_Logo = ({ logo, ...props }) => {
  return (
    <Flex
      sx={{
        width: "84px",
        height: "84px",
        borderRadius: "circle",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        left: "calc(50% - 42px)",
        bottom: ["-40px"],
      }}
      {...props}
    >
      <img
        src={logo}
        alt="hack club cgc's logo"
        sx={{
          width: "84px",
          height: "84px",
          objectFit: "cover",
        }}
      />
    </Flex>
  );
};

export default Hero;
