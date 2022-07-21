import { Stack, Text, Image } from "@chakra-ui/react";
import ItemDestacado from "./ItemDestacado";
const Destacados = () => {
  return (
    <Stack>
      <Stack id="texto-destacado">
        <Text fontSize={24} marginLeft={14} fontWeight="bolder" marginY={6}>
          DESTACADOS HOMBRES
        </Text>
      </Stack>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={"center"}
        alignItems={["center"]}
      >
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/mbpanjog-j-31-322cc6770e48bc432116458041835401-320-0.jpg"
          titulo="Jogging flex"
          precio="$8999"
          cuotas="6 cuotas de $2000"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/mbremfne-b-1-11-b57e1fc581d07a63a916452136420695-320-0.jpg"
          titulo="Remera blanca lisa"
          precio="$3999"
          cuotas="3 cuotas sin interes de $1200"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/19227005-j_21-719ebf4b7a597f2ab016469231615755-320-0.jpg"
          titulo="Gorra billabong gris"
          precio="$3999"
          cuotas="12 cuotas sin interes de $599"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/19128902-a_41-5161362c1505924d5d16463986721817-320-0.jpg"
          titulo="Campera invierno 2022"
          precio="$18999"
          cuotas="12 cuotas sin interes de $3000"
        />
      </Stack>
      <Stack id="texto-destacado">
        <Text fontSize={24} marginLeft={14} fontWeight="bolder" marginY={6}>
          DESTACADOS MUJERES
        </Text>
      </Stack>
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/16128902-j-21-7cdebdd977c5fdc0fb16448715872618-320-0.jpg"
          titulo="Campera de mujer"
          precio="$16997"
          cuotas="12 cuotas sin interes de $3000"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/12128602-j-11-d2470359209cd085da16449546509129-320-0.jpg"
          titulo="Remera billabong manga corta"
          precio="$4599"
          cuotas="12 cuotas sin interes de $3000"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/12128202-j-21-73a3cb1ce97e1c29c616443365299269-640-0.jpg"
          titulo="Remera billabong manga larga"
          precio="$4599"
          cuotas="12 cuotas sin interes de $3000"
        />
        <ItemDestacado
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/products/16128901-h-41-d5d68b95707fbe74bc16449481369724-320-0.jpg"
          titulo="Campera invierno 2022"
          precio="$18999"
          cuotas="12 cuotas sin interes de $3000"
        />
      </Stack>
    </Stack>
  );
};

export default Destacados;
