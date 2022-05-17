import { Stack, Text, Image, Heading } from "@chakra-ui/react";
const Frente = () => {
    return(
        <Stack
        direction={["column", "row"]}
        alignItems="center"
        px={8}
        justifyContent="space-between"
        spacing={6}
        width={["100%"]}
      >
        <Stack alignItems='center' w='100%'>
          <Image
            w="100%"
            h='auto'
            backgroundPosition="cover"
            src="https://imagenes.elpais.com/resizer/jEf8SduE_TjO2N50XqEIgNAV69Q=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/27XXT6AKYVEUFM5BMR3LDLBCRU.jpg"
          />
        </Stack>
        <Stack direction='column' spacing={6} textAlign='center'>
          <Text>
            <Heading>Billabong Summer 2022</Heading>
            <Text color='gray.400' textStyle='italic'> Summer collection 2022. Winter coming soon. </Text>
            <Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Text>
          </Text>
        </Stack>
      </Stack>
    )
}

export default Frente;