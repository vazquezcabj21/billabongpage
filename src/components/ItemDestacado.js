import { Stack, Text, Image } from "@chakra-ui/react";
import './ItemDestacado.css'

const ItemDestacado = (props) => {
    return(
        <Stack id = 'item-destacado'>
          <Image boxSize = '280px' objectFit = 'cover' borderRadius={14} src = {props.src}></Image>
          <Text id="title" fontWeight={"bolder"} fontSize={"md"} letterSpacing={0}>{props.titulo}</Text>
          <Text id = 'precio' fontStyle={"italic"} fontSize={"sm"}>{props.precio}</Text>
          <Text id = 'cuotas' fontSize={"xs"}>{props.cuotas}</Text>
        </Stack>
    )
}

export default ItemDestacado;