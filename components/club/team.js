/**@jsxImportSource theme-ui*/

import { Box, Container, Grid } from "theme-ui";
import Image from "next/image";

import img_1_src from "../../public/profile_pic.png";
import img_2_src from "../../public/profile_pic2.jpeg";

const Team = ({ ...props }) => {
  return (
    <Container {...props} sx={{ textAlign: "center", mt: [4] }}>
      <h3 sx={{ fontSize: [2], fontWeight: "normal" }}>meet the team!</h3>

      <Grid columns={[1, 2, 4]} sx={{ gap: 0 }}>
        {[1, 2, 3, 4, 5].map(({ ...props }, idx) => {
          return <Member idx={idx} {...props} key={idx} />;
        })}
      </Grid>
    </Container>
  );
};

const Member = ({ idx, ...props }) => {
  return (
    <Box sx={{ display: "inline-block", my: [3], mx: [2] }} {...props}>
      <Image
        src={idx % 2 == 0 ? img_1_src : img_2_src}
        alt="member profile pic"
        width={72}
        height={72}
        objectFit="cover"
        sx={{ borderRadius: "circle" }}
      />
      <p sx={{ my: [0], fontWeight: "bold" }}>
        {idx % 2 == 0 ? "saksham kothari" : "neha sharma"}
      </p>
      <p sx={{ mt: [0] }}>
        <i>lead</i>
      </p>
    </Box>
  );
};

export default Team;
