import { Flex } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";
const Navigation = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      boxShadow="xs"
      p="50px 10px"
      fontSize="2rem"
      color="white"
    >
      <NavLink exact to="/" activeClassName="active-nav">
        Accueil
      </NavLink>
      <NavLink exact to="/characters" activeClassName="active-nav">
        Personnages
      </NavLink>
    </Flex>
  );
};

export default Navigation;
