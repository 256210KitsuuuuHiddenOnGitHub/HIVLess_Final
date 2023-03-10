import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { View, Text, ImageBackground } from "react-native";
import HomeScreen from "../Home/Home";
import MessageScreen from "../Message/Message";
import LocationScreen from "../Location/Location";
import NotificationsScreen from "../Notifacations/Notifications";
import MenuScreen from "../Menu/Menu";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();

export default function NavTabs() {
  return (
    <>
      {/* Image ICON on TOP */}
      <View style={{ backgroundColor: "#2B2B2C", marginTop: 50 }}>
        <ImageBackground
          source={require("../../../assets/imgs/HIVLess.png")}
          style={{ height: 80, width: 150 }}
          resizeMode="cover"
        />
      </View>
      {/* Navigation Tab */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarIconStyle: {
              height: 30,
              width: 30,
            },
            tabBarStyle: {
              backgroundColor: "#2B2B2C",
              // paddingBottom:10
            },
          }}
        >
          {/* Home Screen */}
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="home" size={24} color={"white"} />
              ),
            }}
          />
          {/* Message Screen */}
          <Tab.Screen
            name="Message"
            component={MessageScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={24}
                  color={"white"}
                />
              ),
            }}
          />
          {/* Location Screen */}
          <Tab.Screen
            name="Location"
            component={LocationScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome name="map-marker" size={24} color={"white"} />
              ),
            }}
          />
          {/* Notification Screen */}
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color={"white"}
                />
              ),
            }}
          />
          {/* Menu Screen */}
          <Tab.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="menu" size={24} color={"white"} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
