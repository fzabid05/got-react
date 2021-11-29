import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import FilterCharacter from "../components/FilterCharacter";
import Loader from "react-loader-spinner";

const Characters = () => {
  const [data, setData] = useState([]);
  const [activeFamily, setActiveFamily] = useState("");
  const [loading, setLoading] = useState(true);

  const Families = data.reduce(
    (acc, character) =>
      acc.includes(character.lastName) ? acc : acc.concat(character.lastName),
    []
  );
  useEffect(() => {
    axios.get("https://thronesapi.com/api/v2/Characters").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <Box textAlign="center" m="auto">
      <FilterCharacter
        activeFamily={activeFamily}
        setActiveFamily={setActiveFamily}
        Families={Families}
      />
      {loading && (
        <Loader type="Bars" color="#ffffffd4" height={60} width={60} />
      )}

      <SimpleGrid
        minChildWidth="250px"
        spacing="40px"
        p="10"
        textAlign="center"
      >
        {data
          .filter((character) => character.lastName.includes(activeFamily))
          .map((character) => (
            <Character character={character} key={character.id} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Characters;
