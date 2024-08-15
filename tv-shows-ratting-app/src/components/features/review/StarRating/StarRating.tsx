'use client';

import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

interface StarRatingProps {
  noOfStars: number;
  isStatic: boolean;
  onClick: (index: number) => void;
  onHover: (index: number) => void;
  data_testid?: string; // opcionalni prop za testiranje
  color?: string;
}

export const StarRating = ({ noOfStars, isStatic, onClick, onHover, data_testid, color = "white" }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0); // Drži trenutno hoveranu ocjenu

  const handleMouseOver = (index: number) => {
    if (!isStatic) {
      setHoveredRating(index);
      onHover(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isStatic) {
      setHoveredRating(0); // Resetira na početnu vrijednost kad miš napusti područje
    }
  };

  const handleClick = (index: number) => {
    if (!isStatic) {
      onClick(index); // Postavlja odabranu ocjenu na klik
    }
  };

  const renderStars = Array.from({ length: 5 }, (_, i) => {
    const index = i + 1;
    const fillColor = index <= (hoveredRating || noOfStars) ? color : "purple";

    return (
      <Flex
        key={index}
        onClick={() => handleClick(index)}
        onMouseOver={() => handleMouseOver(index)}
        onMouseLeave={handleMouseLeave}
        justify="center"
        align="center"
        cursor="pointer"
        padding="0 5px" // Ovo povećava hitbox između zvjezdica
      >
        <StarIcon color={fillColor} height="100%" />
      </Flex>
    );
  });

  return (
    <Flex flexDirection="row" gap="0" width="25%" data-testid={data_testid}>
      {renderStars}
    </Flex>
  );
}
