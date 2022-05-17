import { AspectRatio } from "@chakra-ui/react";
const Video = (props) => {
  return (
    <AspectRatio maxW= '520px' width= {["100%"]} ratio={2} height={"auto"} >
      <iframe title={props.title} src={props.src} allowFullScreen />
    </AspectRatio>
  );
};

export default Video;
