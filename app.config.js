import "dotenv/config";

export default {
  expo: {
    name: "HIVLess_Final",
    slug: "HIVLess_Final",
    version: "1.0.0",
    orientation: "portrait",

    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyA9YDJLLo3m4KQ2910MnX6BXeOT2Av9D3k",
      authDomain: "hivlessph-14d09.firebaseapp.com",
      projectId: "hivlessph-14d09",
      storageBucket: "hivlessph-14d09.appspot.com",
      messagingSenderId: "13910359826",
      appId: "1:13910359826:web:d8bf712770131a678bbdcb",
    },
  },
};
