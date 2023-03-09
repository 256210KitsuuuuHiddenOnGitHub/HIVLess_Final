import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./src/screens/Login/Login";
export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
      {/* <Box style={{ alignItems: "center" }}>Hello world</Box> */}
    </NativeBaseProvider>
  );
}
