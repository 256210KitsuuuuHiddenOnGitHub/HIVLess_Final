import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Linking } from "react-native";

import HomeCard from "../../components/Home/HomeCard";
import { NativeBaseProvider, Stack } from "native-base";
const Home = () => {
  return (
    <NativeBaseProvider>
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <HomeCard
          imageUrl="https://hms.harvard.edu/sites/default/files/media/GettyImages-1063376014%20BI-850.jpg"
          title="Searching for an HIV Cure"
          description="A team led by Dan Barouch, the HMS William Bosworth Castle Professor of Medicine and director of the Center for Virology and Vaccine Research at Beth Israel Deaconess Medical Center, has been awarded $4.9 million in annual funding over the next five years to find a cure for HIV."
          onPress={() =>
            Linking.openURL("https://hms.harvard.edu/news/searching-hiv-cure")
          }
        />

        <HomeCard
          imageUrl="https://i0.wp.com/epicentre.org.za/wp-content/uploads/2023/02/virus-2.jpg?resize=600%2C338&ssl=1"
          title="What is HIV?"
          description="HIV (Human ImmunoDeficiency Virus) is a virus that attacks the immune system of the body (CDC, 2022). If HIV is not treated, it can lead to AIDS (Acquired ImmunoDeficiency Syndrome) (CDC, 2022)."
          onPress={() => Linking.openURL("https://epicentre.org.za/hiv-aids/")}
        />
        <HomeCard
          imageUrl="https://mdic.org/wp-content/uploads/2020/06/Sites-Mayo-scaled.jpg"
          title="Primary infection (Acute HIV)"
          description="Some people infected by HIV develop a flu-like illness within 2 to 4 weeks after the virus enters the body. This illness, known as primary (acute) HIV infection, may last for a few weeks."
          onPress={() =>
            Linking.openURL(
              "https://www.mayoclinic.org/diseases-conditions/hiv-aids/symptoms-causes/syc-20373524"
            )
          }
        />
        <HomeCard
          imageUrl="https://mdic.org/wp-content/uploads/2020/06/Sites-Mayo-scaled.jpg"
          title="Primary infection (Acute HIV)"
          description="Some people infected by HIV develop a flu-like illness within 2 to 4 weeks after the virus enters the body. This illness, known as primary (acute) HIV infection, may last for a few weeks."
          onPress={() =>
            Linking.openURL(
              "https://www.mayoclinic.org/diseases-conditions/hiv-aids/symptoms-causes/syc-20373524"
            )
          }
        />
        <HomeCard
          imageUrl="https://mdic.org/wp-content/uploads/2020/06/Sites-Mayo-scaled.jpg"
          title="Primary infection (Acute HIV)"
          description="Some people infected by HIV develop a flu-like illness within 2 to 4 weeks after the virus enters the body. This illness, known as primary (acute) HIV infection, may last for a few weeks."
          onPress={() =>
            Linking.openURL(
              "https://www.mayoclinic.org/diseases-conditions/hiv-aids/symptoms-causes/syc-20373524"
            )
          }
        />
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
