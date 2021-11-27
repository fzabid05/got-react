import { Box, Flex, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://thronesapi.com/api/v2/Characters").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Flex flexWrap="wrap">
      {data.map((character) => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            boxSize="200px"
            src={character.imageUrl}
            alt={character.firstName}
          />

          <Box p="6">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {character.title}
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {character.firstName} | {character.lastName}
            </Box>

            <Box>{character.fullName}</Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Characters;
