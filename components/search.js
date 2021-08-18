/**@jsxImportSource theme-ui*/

import { Container, Flex } from "theme-ui";
import { Search as Search_Icon } from "react-feather";
import { useRef } from "react";

const Search = ({ original_data, set_data, ...props }) => {
  const input_ref = useRef();

  console.log("data_copy is", original_data);
  const on_change = () => {
    const search = input_ref.current.value;

    const new_data = original_data.filter(({ name }) => {
      const condition = name.toLowerCase().includes(search.toLowerCase());

      return condition;
    });
    set_data(new_data);
  };

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
          ref={input_ref}
          placeholder="search hack club"
          sx={{
            flex: 1,
            pr: [4],
            border: "none",
            textAlign: "center",
            ":focus": { outline: "none" },
            bg: "transparent",
            color: "white",
          }}
          onChange={on_change}
        />
      </Flex>
    </Container>
  );
};

export default Search;
