import React from "react";
import MapView from "react-native-maps";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Marker } from "react-native-maps";
const Location = () => {
  const [mapRegion, SetMapRegion] = useState({
    latitude: 14.5378,
    longitude: 121.0017,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/* <Text style={{ marginTop: 20, color: "black" }}>Location</Text> */}
      <MapView style={{ width: "100%", height: "100%" }} region={mapRegion}>
        <Marker
          coordinate={{
            latitude: 14.563564630856513,
            longitude: 121.0168495978502,
          }}
          title={"PULSE Clinic Manila - A Lifestyle Clinic"}
          description={
            "Unit 202 Plaza 100 Building V.A Rufino, Corner Dela Rosa Street, Legazpi Village, Makati, 1223 Metro Manila"
          }
        />
        <Marker
          coordinate={{
            latitude: 14.565235200153067,
            longitude: 120.99616908421847,
          }}
          title="LoveYourself Uni"
          description="2nd floor, Unit 209, Centro Buendia Building, 401 Sen. Gil J. Puyat Ave, Pasay, 1013 Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.553272471059648,
            longitude: 120.993765825134,
          }}
          title="Victoria by LoveYourself"
          description="2442 Park Avenue, 1/F Torres Building, Pasay, 1302 Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.536278977588037,
            longitude: 121.00900707048694,
          }}
          title="Malibay Health Center"
          description="G2M5+HPV, Pasay, Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.561887977868537,
            longitude: 120.99778912679848,
          }}
          title="Love yourself Clinic"
          description="2930 Taft Ave, Pasay, 1304 Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.542815908215745,
            longitude: 121.00909088605698,
          }}
          title="Evergreen Medical and Diagnostic Center"
          description="641 Epifanio de los Santos Ave, Pasay, Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.536597090456263,
            longitude: 120.9982996263808,
          }}
          title="iSwab Medical Services"
          description="2028B, LM Bldg, Taft Ave Ext, Pasay, Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.541340547295212,
            longitude: 120.99935081484578,
          }}
          title="Swab iT Medical Services"
          description="3rd floor, 2865 Taft Ave, Pasay, Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.542171358226927,
            longitude: 120.98287132398116,
          }}
          title="HealthFirst Clinic"
          description="G/F FiveE-Com Center Harbor Drive Mall of Asia Complex, Pasay, 1300 Metro Manila"
        />
        <Marker
          coordinate={{
            latitude: 14.561920944957844,
            longitude: 120.9968177926119,
          }}
          title="sto nino clinic"
          description="2442 Park Ave, Pasay, Metro Manila"
        />
      </MapView>
    </View>
  );
};

export default Location;
