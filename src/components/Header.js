import { Stack, Text, Image, Box } from "@chakra-ui/react";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <Stack
      px={[0, 8]}
      spacing={[0, 8]}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width={["100%"]}
    >
      <Stack direction="row" alignItems="center">
        <Image
          w={24}
          h={24}
          src="https://theme.zdassets.com/theme_assets/9886038/afd6d526be22bd3c048db18f097a35b2dcc92689.png"
          alt="logo billabong"
        />
        <Stack direction="row" spacing={4}>
          <a href="#" className="item-list-header">
            Man
          </a>
          <a href="#" className="item-list-header">
            Woman
          </a>
          <a href="#" className="item-list-header">
            Childs
          </a>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4}>
        <SunIcon />
        <SearchIcon />
      </Stack>
    </Stack>
  );
};

export default Header;
