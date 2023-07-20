import { StyleSheet } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{
      flexDirection: "row",
      flex: 1
    }} style={_styles.yeSSuqsK}>
        <View style={_styles.mwkOOrlF}><View style={styles.group} /></View>
        <View style={_styles.cxpBVUon}><View style={styles.group}>
          <Image style={styles.logo} source={require("./Futuristic Modern Black and White Logo.png")} resizeMode="center" />
          <Text style={[styles.text, _styles.qmtzEhPB]}>{"NURSEMATCH"}</Text>
        </View></View>
        <View style={_styles.bCEQvetA}><Text style={[styles.footer, _styles.uLnGpRpj]}>{"EMPOWERING YOUR NURSING CAREER"}</Text></View>
      </ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  qmtzEhPB: {
    textAlign: "center",
    color: "#000000"
  },
  yeSSuqsK: {
    borderRadius: 0,
    backgroundColor: "#e2eeff",
    borderColor: "#ffffff",
    opacity: 1,
    borderWidth: 23
  },
  cxpBVUon: {
    flex: 1
  },
  mwkOOrlF: {
    flex: 1
  },
  bCEQvetA: {
    flex: 1
  },
  uLnGpRpj: {
    width: 130,
    height: 71,
    textAlign: "center",
    flexDirection: "row",
    flex: 1,
    fontFamily: "inherit",
    position: "absolute",
    fontSize: 18,
    color: "#000000",
    fontWeight: 700,
    marginBottom: 20,
    top: 514,
    left: -110
  }
});