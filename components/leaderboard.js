/**@jsxImportSource theme-ui*/

import { darken } from "@theme-ui/color";
import { Container, Box, Grid } from "theme-ui";

const Leaderboard = ({ ...props }) => {
  return (
    <Container
      {...props}
      sx={{
        bg: "transparent",
        px: [2, "initial"],
      }}
    >
      <Grid sx={{ py: [4], justifyItems: "center" }} columns={[1, 1, 2, 3]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(({}, index) => (
          <Card rank={index + 1} />
        ))}
      </Grid>
    </Container>
  );
};

const Card = ({ rank, ...props }) => {
  return (
    <Box
      as="a"
      href="/"
      sx={{
        textAlign: "center",
        position: "relative",
        boxShadow: "0px 1px 8px rgb(0 0 0 / 50%)",
        boxShadow: "0 4px 8px rgb(0 0 0 / 13%)",
        my: [2],
        py: [3],
        borderRadius: [10],
        minWidth: [290],
        textDecoration: "none",
        color: "text",

        transition: "0.2s",
        ":hover": {
          transform: "scale(1.1)",
        },

        ":before":
          rank == 1
            ? {
                content: `""`,
                display: "block",
                width: [64],
                height: [64],
                backgroundImage:
                  "url(https://cloud-hagknt1c6-hack-club-bot.vercel.app/0image.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",

                position: "absolute",
                right: [2],
                top: [-3],
                transform: "rotate(10deg)",
              }
            : null,
      }}
      {...props}
    >
      <p>
        <b> hack club cgc </b>{" "}
      </p>
      <img
        src="hc_logo.png"
        sx={{
          height: [64],
          width: [64],
          borderRadius: "circle",
          bg: "smoke",
          objectFit: "cover",
        }}
      />
      <h4 sx={{ my: [0] }}>POINTS</h4>
      <p
        sx={{
          color: "white",
          bg: "primary",
          minWidth: [100],
          px: [3],
          py: [2],
          mt: [1],
          mb: [0],
          borderRadius: [20],
          display: "inline-block",
          fontSize: [0],
        }}
      >
        <b>550</b>
      </p>
      <p sx={{ my: [0], textAlign: "end", px: [4] }}>
        <span> {rank} </span>
      </p>
    </Box>
  );
};

export default Leaderboard;
