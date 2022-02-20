import React from "react";
import { Box, Flex, Image, Text } from "native-base";
const BurgerImg = require("../assets/burger.jpg");

const RecentRecipeCard = () => {
  return (
    <Flex direction="column" width={"32"} marginRight="5">
      <Box width={32} height={32}>
        <Image
          borderRadius={"xl"}
          source={BurgerImg}
          width={"full"}
          height="full"
          alt="Recent items viewe being displayed"
        />
      </Box>
      <Box>
        <Text color={"gray.800"} fontSize={18} fontWeight="semibold">
          Indonesian Burger
        </Text>
        <Text color={"gray.500"} fontWeight="thin">
          By Adrianna Curl
        </Text>
      </Box>
    </Flex>
  );
};

export default RecentRecipeCard;
