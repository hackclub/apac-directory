/**@jsxImportSource theme-ui*/

import { Container, Heading, Text } from "theme-ui";

const Intro = ({ ...props }) => {
  return (
    <Container sx={{ textAlign: "center" }} {...props}>
      <Heading sx={{ variant: "subt" }}>may the force be with you</Heading>
      <Heading sx={{ variant: "heading", color: "red" }}>
        <span sx={{ variant: "wavy" }}>Welcome </span>
      </Heading>
      <p sx={{ variant: "para", mt: [3, 4] }}>
        The leaderboard is a way to appreciate Hack Clubs in the Asia-Pacific
        region, which are doing amazing work throughout the term! Top the board
        and win amazing prizes!
      </p>
    </Container>
  );
};

export default Intro;
