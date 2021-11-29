import React from "react";
import { Image, Box } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Box>
      <Image w="100%" src="../assets/Logo_Game_of_Thrones.png" />
      <Navigation />
    </Box>
  );
};

export default Header;
