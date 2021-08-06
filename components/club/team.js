/**@jsxImportSource theme-ui*/

import { Box, Container, Grid } from "theme-ui";
import Image from "next/image";

import img_1_src from "../../public/profile_pic.png";
import img_2_src from "../../public/profile_pic2.jpeg";

const Team = ({ team_data, ...props }) => {
  return (
    <Container {...props} sx={{ textAlign: "center", mt: [4] }}>
      <h3 sx={{ fontSize: [2], fontWeight: "normal" }}>meet the team!</h3>

      <Grid columns={[1, 2, 4]} sx={{ gap: 0 }}>
        {team_data.map(({ ...props }, idx) => {
          return <Member idx={idx} {...props} key={idx} />;
        })}
      </Grid>
    </Container>
  );
};

const Member = ({ img_url, name, role, idx, ...props }) => {
  return (
    <Box sx={{ display: "inline-block", my: [3], mx: [2] }} {...props}>
      <img
        src={img_url}
        alt="member profile pic"
        sx={{
          width: "72px",
          height: "72px",
          borderRadius: "circle",
        }}
      />
      <p sx={{ my: [0], fontWeight: "bold" }}>{name}</p>
      <p sx={{ mt: [0] }}>
        <i>{role}</i>
      </p>
    </Box>
  );
};

export default Team;
