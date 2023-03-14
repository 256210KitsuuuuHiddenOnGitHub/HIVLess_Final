import {
  Input,
  Icon,
  Stack,
  Pressable,
  Button,
  Divider,
  Box,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  SafeAreaView,
  ImageBackground,
  Text,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { useNavigation } from "@react-navigation/native";
export default function SignUp() {
  const [show, setShow] = React.useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const onHandleSignUp = () => {
    if (userName !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, userName, password)
        .then(() => console.log("SignUp Success"))
        .catch((err) => Alert.alert("SignUp Error", err.message));
    }
  };

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#2A2B2DFF"
      />
      <SafeAreaView style={{ backgroundColor: "#2A2B2DFF", flex: 1 }}>
        {/* This is The Logo of HIVLess */}
        <ImageBackground
          source={require("./../../../assets/imgs/HIVLess.png")}
          style={{
            width: 300,
            height: 100,
            alignSelf: "center",
            marginBottom: 50,
            // marginTop: 30,
          }}
          resizeMode="cover"
        />
        {/* This stack is for Inputs */}
        <Stack space={4} w="100%" alignItems="center">
          {/* Username input */}
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
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          {/* Password input */}

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
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {/*Confirm Password input */}
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
            placeholder="Confirm Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </Stack>

        {/* Sign UP Button */}
        <Button
          size="lg"
          bg="#2DA8D8FF"
          _text={{ color: "white", fontSize: "xl", fontWeight: "bold" }}
          mt={4}
          w={{
            base: "80%",
            md: "25%",
          }}
          alignSelf="center"
          rounded="full"
          marginTop={10}
        >
          Sign Up
        </Button>
        {/*  Already have an account */}
        <TouchableOpacity
          style={{ padding: 12 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white", alignSelf: "center", margin: 10 }}>
            Already have an account
          </Text>
        </TouchableOpacity>
        {/* Divider */}
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

        {/* Button Google and Email */}

        <Stack space={5} w="100%" alignItems="center">
          <Button
            onPress={onHandleSignUp}
            color="#2DA8D8FF"
            variant="solid"
            w={{
              base: "80%",
              md: "25%",
            }}
            size="lg"
            leftIcon={<FontAwesome name="facebook-f" size={24} color="white" />}
            rounded="full"
          >
            Sign In with Facebook
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
            leftIcon={<AntDesign name="google" size={24} color="white" />}
            rounded="full"
          >
            Sign In with Google
          </Button>
        </Stack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
