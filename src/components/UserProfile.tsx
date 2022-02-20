import { Box, Image, Text } from "native-base";
import React from "react";
const ProfileImg = require("../assets/user-portrait.jpg");

const UserProfile = () => {
  return (
    <Box height={"48"} width={"24"} marginRight={4}>
      <Image
        source={ProfileImg}
        width="24"
        height={"24"}
        alt="Creator Profile Image"
        borderRadius={"full"}
      />
      <Text
        textAlign={"center"}
        marginTop="3"
        fontWeight={"semibold"}
        fontSize="lg"
      >
        Roberta {"\n"}Anny
      </Text>
    </Box>
  );
};

export default UserProfile;
