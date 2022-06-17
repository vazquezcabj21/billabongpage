import { Stack, Text } from "@chakra-ui/react";
import Video from "./Video";
const styleText = {
    padding: "20px",
    margin: "15px",
    fontSize: "32px",
    fontWeight: "900",
    backgroundColor: "black",
    color: "white"
}
const VideoSection = () => {
    return(
        <Stack paddingY={[12]} direction={["column", "row"]} justifyContent={['center']} width={["100%"]}>
            <Video title = 'billabong' src = "https://www.youtube.com/embed/pi487Lnr3QE"></Video>
            <Stack px={8}>
                <Text style={styleText}  >WE</Text>
                <Text style={styleText}>ARE</Text>
                <Text style={styleText}>PROGRESSIVE</Text>
            </Stack>
        </Stack>
    )
}
export default VideoSection;