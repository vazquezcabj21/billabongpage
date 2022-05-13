import {ArrowRightIcon, TimeIcon, RepeatIcon, CheckIcon } from '@chakra-ui/icons'
import { Stack, Text } from '@chakra-ui/react';
const Beneficios = () => {
    const HeadingStyle = {
        fontWeight : 'bolder',
    }
    return(
        <Stack direction = {'row'} justifyContent = {'space-evenly'} padding={8} >
        <Stack direction={'row'} alignItems = {'center'} >
            <CheckIcon w= {8} h= {8}/>
            <Text style = {HeadingStyle}paddingLeft = {6}>12 CUOTAS SIN INTERÉS</Text>
        </Stack>
        <Stack direction={'row'} alignItems = {'center'} >
            <ArrowRightIcon w= {8} h= {8}/>
            <Text style = {HeadingStyle}paddingLeft = {6}>ENVIOS A TODO EL PAÍS</Text>
        </Stack>
        <Stack direction={'row'} alignItems = {'center'} >
            <TimeIcon w= {8} h= {8}/>
            <Text style = {HeadingStyle}paddingLeft = {6}>ENTREGAS FULL</Text>
        </Stack>
        <Stack direction={'row'} alignItems = {'center'} >
            <RepeatIcon	w = {8} h= {8}/>
            <Text style = {HeadingStyle}paddingLeft = {6}>CAMBIOS Y DEVOLUCIONES</Text>
        </Stack></Stack>

    )
}

export default Beneficios;
