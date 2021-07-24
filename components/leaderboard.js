/**@jsxImportSource theme-ui*/

import { Container, Box, Grid } from "theme-ui";

const Leaderboard = ({ ...props }) => {
  return (
    <Container {...props}>
      <Grid sx={{ py: [4], justifyItems: "center" }} columns={[1, 1, 2, 3]}>
        {[1, 2, 3, 4, 5, 6].map(({}) => (
          <Card />
        ))}
      </Grid>
    </Container>
  );
};

const Card = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        textAlign: "center",
        boxShadow: "0px 0px 3px 0px black",
        my: [2],
        py: [3],
        borderRadius: [10],
        minWidth: [290],
      }}
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
          borderRadius: [20],
          display: "inline-block",
          mt: [1],
          fontSize: [0],
        }}
      >
        <b>550</b>
      </p>
    </Box>
  );
};

export default Leaderboard;
