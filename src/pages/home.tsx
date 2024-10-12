import { Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Flex h="100vh" py={[10, 10]} padding={10} justifyContent="center">
      <Text fontSize="4xl">
        <Typewriter
          options={{
            strings: ["Easy Billing"],
            autoStart: true,
            loop: true,
          }}
        />
      </Text>
    </Flex>
  );
};

export default Home;
