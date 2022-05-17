import {
  ArrowRightIcon,
  TimeIcon,
  RepeatIcon,
  CheckIcon,
} from "@chakra-ui/icons";

import { Stack, Text } from "@chakra-ui/react";

const HeadingStyle = {
  fontWeight: "bolder",
};

const Beneficios = () => {
  return (
    <Stack direction={["column", "row"]} justifyContent={["center"]} alignItems={["right"]} padding={[8, 8]} width={["100%"]}>
      <Stack direction={"row"} alignItems={"center"}>
        <CheckIcon w={8} h={8} />
        <Text style={HeadingStyle} paddingX={6}>
          12 CUOTAS SIN INTERÉS
        </Text>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <ArrowRightIcon w={8} h={8} />
        <Text style={HeadingStyle} paddingX={6}>
          ENVIOS A TODO EL PAÍS
        </Text>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <TimeIcon w={8} h={8} />
        <Text style={HeadingStyle} paddingX={6}>
          ENTREGAS FULL
        </Text>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <RepeatIcon w={8} h={8} />
        <Text style={HeadingStyle} paddingX={6}>
          CAMBIOS Y DEVOLUCIONES
        </Text>
      </Stack>
    </Stack>
  );
};

export default Beneficios;
