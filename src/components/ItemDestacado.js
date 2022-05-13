import { Stack, Text, Image } from "@chakra-ui/react";
const ItemDestacado = (props) => {
    return(
        <Stack id = 'item-destacado'>
          <Image boxSize = '280px' objectFit = 'cover' borderRadius={14} src = {props.src}></Image>
          <Text id="title">CAMPERA DE HOMBRE</Text>
          <Text id = 'precio'>$2100</Text>
          <Text id = 'cuotas'>12 Cuotas sin interes de $12020</Text>
        </Stack>
    )
}

export default ItemDestacado;