import React from "react";
import { Select, Box } from "@chakra-ui/react";
const FilterCharacter = ({ activeFamily, setActiveFamily, Families }) => {
  return (
    <Box mb="50px">
      <Select
        textAlign="center"
        mb="40px"
        p="10px"
        fontSize="1.5em"
        rounded="3"
        cursor="pointer"
        fontFamily="Josefin Slab"
        name="families"
        id="families"
        value={activeFamily}
        onChange={(e) => setActiveFamily(e.target.value)}
      >
        <option value="">---</option>
        {Families.map((family) => (
          <option key={family} value={family}>
            {family}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default FilterCharacter;
