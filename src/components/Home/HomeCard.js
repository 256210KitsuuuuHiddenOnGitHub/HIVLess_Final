import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  NativeBaseProvider,
  Pressable,
  Icon,
} from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const HomeCard = ({ imageUrl, title, description, onPress }) => {

  return (
    <NativeBaseProvider>
      <Box alignItems="center" mb={4} mt={10}>
        <Box
          maxW="370"
          rounded="xl"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="2"
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{ uri: imageUrl }} alt="image" />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1" color="black">
                {title}
              </Heading>
            </Stack>
            <Text fontWeight="400" color="black" textAlign="justify">
              {description}
            </Text>

            <Pressable
              onPress={onPress}
              alignItems="center"
              justifyContent="center"
              style={{
                backgroundColor: "#0FA5E8",
                margin: 8,
                borderRadius: 4,
                width: 200,
                height: 40,
                alignSelf: "center",
              }}
            >
              <Icon
                as={<MaterialCommunityIcons name="tray-arrow-up" />}
                size={19}
                color="white"
              />
            </Pressable>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default HomeCard;
