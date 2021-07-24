/**@jsxImportSource theme-ui*/

import { Box, Container, Heading } from "theme-ui";

const Hero = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        backgroundColor: "purple",
        backgroundImage:
          "url(https://cloud-6bk9im8cz-hack-club-bot.vercel.app/0image.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
      <Container sx={{ my: [4], pb: [4, 3] }}>
        <Heading sx={{ fontSize: [2, 4, 5] }}>Hack Club APAC's</Heading>

        <Heading
          variant="ultratitle"
          sx={{
            display: "inline-block",
            bg: "primary",
            fontSize: [4, 6, 7],
            px: [3],
            py: [2],
            borderRadius: [10],
            my: [2, 3],
          }}
        >
          Leaderboard
        </Heading>
      </Container>
    </Box>
  );
};

export default Hero;
