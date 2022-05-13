import { AspectRatio } from "@chakra-ui/react";
const Video = (props) => {
  return (
    <AspectRatio width={320} ratio={1} maxWidth= '320px'>
      <iframe title={props.title} src={props.src} allowFullScreen/>
    </AspectRatio>
  );
};

export default Video;
