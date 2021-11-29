import { Container, Text } from "@chakra-ui/layout";
import React from "react";

const Home = () => {
  return (
    <Container
      minH="80vh"
      color="#ffffffd4"
      fontSize="1.5em"
      lineHeight="1.5"
      p="60px 20px"
      textAlign="justify"
    >
      <article>
        <p>
          Game of Thrones, est une série télévisée américaine de fantaisie
          médiévale développée par David Benioff et D. B. Weiss pour HBO.
        </p>
        <p>
          Elle est basée sur la saga Le Trône de fer (A Song of Ice and Fire),
          une série de romans écrits par George R.R. Martin depuis 1996.
        </p>
        <p>
          À ce jour, la série se compose de huit saisons comprenant
          soixante-treize épisodes au total. Elle a été diffusée par le réseau
          HBO du 17 avril 2011 jusqu'au 19 mai 2019, en France depuis le 5 juin
          2011 sur OCS City et en Belgique depuis le 19 décembre 2011 sur BeTV,
          au Québec elle est diffusée sur Super Écran depuis le 7 août 2011.
        </p>
        <Text fontSize="0.5em">
          Source: https://gameofthrones.fandom.com/fr/wiki/Game_of_Thrones
        </Text>
      </article>
    </Container>
  );
};

export default Home;
