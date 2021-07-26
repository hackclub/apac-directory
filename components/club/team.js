/**@jsxImportSource theme-ui*/

import { Box, Container, Grid } from "theme-ui";
import Image from "next/image";

import img_1_src from "../../public/profile_pic.png";

const Team = ({ ...props }) => {
  return (
    <Container {...props} sx={{ textAlign: "center", mt: [4] }}>
      <h3 sx={{ fontSize: [3], fontWeight: "normal" }}>meet the team!</h3>

      <Grid columns={[1, 2, 4]} sx={{ gap: 0 }}>
        {[1, 2, 3, 4, 5].map(({ ...props }, idx) => {
          return <Member {...props} key={idx} />;
        })}
      </Grid>
    </Container>
  );
};

const Member = ({ ...props }) => {
  return (
    <Box sx={{ display: "inline-block", my: [3], mx: [2] }} {...props}>
      <Image
        src={img_1_src}
        alt="member profile pic"
        width={72}
        height={72}
        objectFit="cover"
      />
      <p sx={{ my: [0], fontWeight: "bold" }}>saksham kothari</p>
      <p sx={{ mt: [0] }}>
        <i>lead</i>
      </p>
    </Box>
  );
};

export default Team;
