/**@jsxImportSource theme-ui*/

import { Box, Container, Flex } from "theme-ui";
import Image from "next/image";

import hc_logo_src from "../../public/hc_logo.png";

const Hero = ({ children, ...props }) => {
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
      <Notification />
      <Club_Logo />
    </Box>
  );
};

const Notification = ({ ...props }) => {
  return (
    <Container
      sx={{
        backgroundColor: "rgba(248, 232, 232, 0.9)",

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
      <p sx={{ fontSize: [0, 1] }}>
        hack club cgc was founded in 2019 with a dream of making a cool tech
        community in cgc! we are now a happy team of 13 members.
      </p>
    </Container>
  );
};

const Club_Logo = ({ ...props }) => {
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
      <Image
        src={hc_logo_src}
        alt="hack club cgc's logo"
        width="84px"
        height="84px"
        objectFit="cover"
      />
    </Flex>
  );
};

export default Hero;