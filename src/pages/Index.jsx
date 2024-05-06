import { Container, Box, useEventListener } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setPosition((prev) => ({ ...prev, y: Math.max(prev.y - 10, 0) }));
        break;
      case "ArrowDown":
        setPosition((prev) => ({ ...prev, y: Math.min(prev.y + 10, 100) }));
        break;
      case "ArrowLeft":
        setPosition((prev) => ({ ...prev, x: Math.max(prev.x - 10, 0) }));
        break;
      case "ArrowRight":
        setPosition((prev) => ({ ...prev, x: Math.min(prev.x + 10, 100) }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Container centerContent maxW="container.xl" height="100vh" p={0}>
      <Box position="relative" width="100%" height="100%" bg="gray.300">
        <Box
          position="absolute"
          left={`${position.x}%`}
          top={`${position.y}%`}
          width="50px"
          height="100px"
          bg="red"
          transition="0.1s all ease-in-out"
        />
      </Box>
    </Container>
  );
};

export default Index;