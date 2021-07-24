/**@jsxImportSource theme-ui*/

import { Container, Flex } from "theme-ui";
import { Search as Search_Icon } from "react-feather";

const Search = ({ ...props }) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Flex
        sx={{
          width: [280],
          border: "1px solid",
          borderColor: "primary",
          borderRadius: "circle",
          pl: [3],
          py: [2],
          pr: [1],
          "input:focus": {
            borderColor: "yellow",
          },
          ":focus-within": {
            boxShadow: "0px 0px 3px 0px #ec3750",
          },
        }}
        {...props}
      >
        <Search_Icon sx={{ color: "primary" }} />
        <input
          placeholder="search hack club"
          sx={{
            flex: 1,
            pr: [4],
            border: "none",
            textAlign: "center",
            ":focus": { outline: "none" },
          }}
        />
      </Flex>
    </Container>
  );
};

export default Search;
