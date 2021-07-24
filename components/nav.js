/**@jsxImportSource theme-ui*/

import Image from "next/image";
import { Container, Button } from "theme-ui";

const Nav = ({ ...props }) => {
  return (
    <Container {...props} sx={{ display: "flex", alignItems: "center" }}>
      <Image src={"/../public/flag.png"} width={72 * 1.5} height={40 * 1.5} />
      <Button
        as="a"
        href="https://hackclub.com"
        sx={{ display: "inline-block", ml: "auto", px: [4] }}
      >
        join
      </Button>
    </Container>
  );
};

export default Nav;
