/**@jsxImportSource theme-ui*/

import { Box, Container, Grid } from "theme-ui";

const Stats = ({ ...props }) => {
  return (
    <Container sx={{ textAlign: "center", pt: [4], mt: [2] }}>
      <h4
        sx={{
          display: "inline-block",
          px: [4],
          py: [3],
          bg: "primary",
          color: "white",
          borderRadius: [10],
          mx: [2],
          fontSize: [0, 1],
        }}
        {...props}
      >
        Hack Club CGC{" "}
      </h4>
      <Stats_Bar />
    </Container>
  );
};

const Stats_Bar = ({ ...props }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      {...props}
    >
      {data.map(({ ...props }) => (
        <Stat_Element {...props} key={props.attribute} />
      ))}
    </Container>
  );
};

const Stat_Element = ({ attribute, value, ...props }) => {
  return (
    <Box sx={{ "*": { my: [0] }, mx: [2, 3, 4], mt: [3, 2] }}>
      <h4> {attribute}</h4>
      <p>{value}</p>
    </Box>
  );
};

const data = [
  {
    attribute: "ships",
    value: "30",
  },
  {
    attribute: "hackathons",
    value: "12",
  },
  {
    attribute: "meetings",
    value: "42",
  },
  {
    attribute: "events",
    value: "24",
  },
  {
    attribute: "points",
    value: "108",
  },
];

export default Stats;
