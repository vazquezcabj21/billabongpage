import { Stack, Text, Image, Heading, Divider } from "@chakra-ui/react";
import Header from "./components/Header";
import Frente from "./components/Frente";
import Beneficios from "./components/Beneficios";
import Destacados from "./components/Destacados";
import VideoSection from "./components/VideoSection";


function App() {
  return (
    <Stack>
      <Header />
      <Frente />
      <Beneficios />
      <Destacados />
      <Image src="file:///C:/Users/Admin/Downloads/1-slide-1651158220859-2907204306-031b77d8e15b9897702b02e37b22dae41651158224-1920-1920%20(1).webp" alt = 'banner'></Image>
      <VideoSection></VideoSection>
    </Stack>
  );
}

export default App;
