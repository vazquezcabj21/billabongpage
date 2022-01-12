import { Stack, Text, Image,Box } from "@chakra-ui/react";
import {SearchIcon, SunIcon} from '@chakra-ui/icons'


const Header = () => {
    return (<Stack px = {8} spacing={6} direction="row" alignItems="center" justifyContent='space-between'>
      
    <Stack direction='row' alignItems='center'>
      <Image
        w={24}
        h={24}
        src="https://theme.zdassets.com/theme_assets/9886038/afd6d526be22bd3c048db18f097a35b2dcc92689.png"
        alt="logo billabong"
      />
    <Stack direction="row" spacing={4}>
      <a href="#">Man</a>
      <a href="#">Woman</a>
      <a href="#">Childs</a>
    </Stack>
    </Stack>
    <Stack direction='row' spacing={4} >
      <SunIcon/>
      <SearchIcon />
    </Stack>
  </Stack>)
}

export default Header;