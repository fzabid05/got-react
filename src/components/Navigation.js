import { Flex } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      boxShadow="xs"
      p="20px 10px"
    >
      <NavLink fontSize="6xl" exact to="/">
        Accueil
      </NavLink>
      <NavLink fontSize="3em" exact to="/characters">
        Personnages
      </NavLink>
    </Flex>
  );
};

export default Navigation;
