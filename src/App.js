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
      <VideoSection></VideoSection>
    </Stack>
  );
}

export default App;
