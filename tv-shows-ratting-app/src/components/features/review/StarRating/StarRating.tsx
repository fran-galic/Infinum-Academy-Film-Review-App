import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

interface StarRatingProps {
  noOfStars: number;
  isStatic: boolean;
  onClick: (index: number) => void;
  onHover: (index: number) => void;
}

export const StarRating = ({ noOfStars, isStatic, onClick, onHover }: StarRatingProps) => {
  const renderStars = Array.from({ length: 5 }, (_, i) => {
      const index = i + 1;
      return (
        <StarIcon
          color={index <= noOfStars ? "yellow" : "gray"}
          height="10%"
          key={index}
          onClick={!isStatic ? () => onClick(index) : undefined}
          onMouseOver={!isStatic ? () => onHover(index) : undefined}
        />
      );
    });

  return (
    <Flex flexDirection="row" gap="5px" width="25%">
      {renderStars}
    </Flex>
  );
}