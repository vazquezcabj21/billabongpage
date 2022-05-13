import { Stack, Text } from "@chakra-ui/react";
import Video from "./Video";
const VideoSection = () => {
    return(
        <Stack padding={45} direction={"row"}>
            <Video title = 'billabong' src = "https://www.youtube.com/embed/pi487Lnr3QE"></Video>
            <Stack>
                <Text>WE</Text>
                <Text>ARE</Text>
                <Text>PROGRESSIVE</Text>
            </Stack>
        </Stack>
    )
}
export default VideoSection;