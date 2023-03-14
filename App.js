import React, { createContext } from "react";
import { ActivityIndicator, View } from "react-native";
import Login from "./src/screens/SignIn/Login";
import NavTabs from "./src/screens/NavigationTabs/NavTabs";
import SignUp from "./src/screens/SignUp/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useContext } from "react";
import { auth } from "./src/auth/firebase";

const Stack = createNativeStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthProvider.Provider value={{ user, setUser }}>
      {children}
    </AuthProvider.Provider>
  );
};

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NavTab" component={NavTabs} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  <Stack.Navigator defaultScreenOptions={Login}>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={Login}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="SignUp"
      component={SignUp}
    />
  </Stack.Navigator>;
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}
