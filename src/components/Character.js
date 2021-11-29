import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "../styles/character.css";

const Character = ({ character }) => {
  return (
    // <div >
    <div className="characterBox">
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="#ffffffd9"
      w="250px"
      m="auto"
      rounded="5"
      boxShadow="10px 7px 22px 2px rgba(0, 0, 0, 0.5)"
      _hover="transform: scale(1.25)"
    >
      <Image
        boxSize="250px"
        rounded="5 5 0 0"
        src={character.imageUrl}
        alt={character.firstName}
      />
      <Box p="30px 0px">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {character.fullName}
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {character.firstName} {character.lastName}
        </Box>

        <Box>{character.title}</Box>
      </Box>
    </Box>
    </div>
  );
};

export default Character;
