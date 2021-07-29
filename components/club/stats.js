/**@jsxImportSource theme-ui*/

import { Box, Container, Flex, Grid } from "theme-ui";
import { HelpCircle } from "react-feather";
import Tippy from "@tippyjs/react";

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

const Stat_Element = ({ attribute, value, label_element, ...props }) => {
  return (
    <Box sx={{ "*": { my: [0] }, mx: [2, 3, 4], mt: [3, 2] }} {...props}>
      <Flex sx={{ alignItems: "center" }}>
        <h4> {attribute}</h4>
        {label_element}
      </Flex>
      <p>{value}</p>
    </Box>
  );
};

const TippyContainer = ({ children, content, ...props }) => (
  <Tippy content={content} {...props}>
    {children}
  </Tippy>
);

const Help_Comp = ({ ...props }) => {
  return (
    <TippyContainer content="total points">
      <HelpCircle
        title="total points"
        sx={{
          width: 15,
          height: 15,
          ml: [1],
          cursor: "pointer",
          outline: "none",

          "@media (pointer:coarse)": {
            ":focus": {
              border: "1px solid black",
              borderRadius: ["circle"],
            },
          },
        }}
        {...props}
      />
    </TippyContainer>
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
  {
    attribute: "t.points",
    value: "600",
    label_element: <Help_Comp />,
  },
];

export default Stats;
