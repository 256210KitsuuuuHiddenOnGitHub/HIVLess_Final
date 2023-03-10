import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./src/screens/SignIn/Login";
import NavTabs from "./src/screens/NavigationTabs/NavTabs";
import SignUp from "./src/screens/SignUp/SignUp";
export default function App() {
  return <NavTabs />;
}
