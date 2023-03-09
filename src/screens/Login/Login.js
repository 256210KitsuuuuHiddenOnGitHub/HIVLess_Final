import {
  Input,
  Icon,
  Stack,
  Pressable,
  Button,
  Divider,
  Box,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, SafeAreaView, ImageBackground, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Login() {
  const [show, setShow] = React.useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#011F3C", flex: 1 }}>
      {/* This is The Logo of HIVLess */}
      <ImageBackground
        source={require("./../../../assets/imgs/HIVLess.png")}
        style={{
          width: 300,
          height: 200,
          alignSelf: "center",
          marginBottom: 10,
          marginTop: 30,
        }}
        resizeMode="cover"
      />
      {/* This stack is for Inputs */}
      <Stack space={4} w="100%" alignItems="center">
        <Input
          fontSize={20}
          w={{
            base: "80%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="white"
            />
          }
          color="white"
          placeholder="Username"
        />
        <Input
          fontSize={20}
          w={{
            base: "80%",
            md: "25%",
          }}
          type={show ? "text" : "password"}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="white"
              />
            </Pressable>
          }
          color="white"
          placeholder="Password"
        />
      </Stack>
      <View>
        <Text
          style={{
            marginTop: 10,
            color: "white",
            fontSize: 12,
            marginLeft: 220,
            marginBottom: 15,
          }}
        >
          Forgot your Password?
        </Text>
      </View>
      <Button
        size="lg"
        bg="#0055FE"
        _text={{ color: "white", fontSize: "xl", fontWeight: "bold" }}
        mt={4}
        w={{
          base: "80%",
          md: "25%",
        }}
        alignSelf="center"
        rounded="full"
      >
        LOGIN
      </Button>
      <TouchableOpacity style={{ padding: 12 }}>
        <Text style={{ color: "white", alignSelf: "center", margin: 10 }}>
          Create new account
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 55,
        }}
      >
        <View style={{ height: 1, flex: 1, backgroundColor: "gray" }} />
        <Text style={{ marginHorizontal: 10, color: "gray" }}>OR</Text>
        <View style={{ height: 1, flex: 1, backgroundColor: "gray" }} />
      </View>
      <Stack space={10} w="100%" alignItems="center">
        <Button
          onPress={() => {}}
          color="#5185ED"
          variant="solid"
          w={{
            base: "80%",
            md: "25%",
          }}
          size="lg"
          leftIcon={<AntDesign name="google" size={24} color="white" />}
          rounded="full"
        >
          Sign In with Google
        </Button>
        <Button
          onPress={() => {}}
          colorScheme="red"
          variant="solid"
          w={{
            base: "80%",
            md: "25%",
          }}
          size="lg"
          leftIcon={<MaterialIcons name="email" size={24} color="white" />}
          rounded="full"
        >
          Sign In with Email
        </Button>
      </Stack>
    </SafeAreaView>
  );
}