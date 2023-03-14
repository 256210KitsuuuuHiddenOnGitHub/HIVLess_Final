import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { View, Text, ImageBackground, StatusBar } from "react-native";
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
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      {/* Image ICON on TOP */}
      <View style={{ backgroundColor: "white" }}>
        <ImageBackground
          source={require("../../../assets/imgs/HIVLessBlack.png")}
          style={{ height: 80, width: 150 }}
          resizeMode="cover"
        />
      </View>
      {/* Navigation Tab */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarShowIcon: true,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarIconStyle: {
              height: 30,
              width: 30,
            },
            tabBarStyle: {
              backgroundColor: "white",
              // paddingBottom:10
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Message") {
                iconName = "message-text-outline";
              } else if (route.name === "Location") {
                iconName = "map-marker";
              } else if (route.name === "Notifications") {
                iconName = "bell-outline";
              } else if (route.name === "Menu") {
                iconName = "menu";
              }

              // Change icon color when selected
              color = focused ? "#0FA5E8" : "black";

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={22}
                  color={color}
                />
              );
            },
          })}
          // screenOptions={{
          //   activeTintColor: "blue",
          //   inactiveTintColor: "black",
          // }}
        >
          {/* Home Screen */}
          <Tab.Screen name="Home" component={HomeScreen} />
          {/* Message Screen */}
          <Tab.Screen name="Message" component={MessageScreen} />
          {/* Location Screen */}
          <Tab.Screen name="Location" component={LocationScreen} />
          {/* Notification Screen */}
          <Tab.Screen name="Notifications" component={NotificationsScreen} />
          {/* Menu Screen */}
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
