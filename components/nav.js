/**@jsxImportSource theme-ui*/

import Image from "next/image";
import { Container, Button, Box, Link } from "theme-ui";

import flag_src from "../public/flag.png";

const Nav = ({ ...props }) => {
  return (
    <>
      <Box bg="red" sx={{ fontWeight: "bold", py: 2 }}>
        APAC Directory is being phased out in favour of Scrapbook. Join #scrapbook on {" "}
        <Link href="https://hackclub.com/slack" sx={{color: 'white'}}>the Hack Club Slack</Link> {" "}
        to get started or <Link href="mailto:zach@hackclub.com" sx={{color: 'white'}}>reach out</Link> for more details.
      </Box>
      <Container {...props} sx={{ display: "flex", alignItems: "center" }}>
        <a href="https://leaderboard.hackclub.com">
         <Image src={flag_src} width={72 * 1.5} height={40 * 1.5} />
        </a>
        <Button
          as="a"
          href="https://hackclub.com"
          sx={{ display: "inline-block", ml: "auto", px: [4] }}
        >
          join
        </Button>
      </Container>
    </>
  );
};

export default Nav;
