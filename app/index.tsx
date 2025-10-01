import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/favicon.png")}
            style={styles.logo}
            contentFit="contain"
          />
        </View>

        <Text style={styles.welcomeText}>
          Comece agora uma nova jornada {"\n"} com os seus Kambas!
        </Text>

        <View
          style={styles.pickerContainer}
        >
          <Picker
            selectedValue={selectedCountry}
            dropdownIconColor="#fff"
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
          >
            <Picker.Item label="Selecione o seu país" value="" />
            <Picker.Item label="Angola" value="ao" />
            <Picker.Item label="Brazil" value="br" />
            <Picker.Item label="Portugal" value="pt" />
            <Picker.Item label="Moçambique" value="mz" />
            <Picker.Item label="Congo" value="cg" />
            <Picker.Item label="Estados Unidos" value="us" />
          </Picker>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => router.push("/phone")}
        >
          <Text style={styles.buttonText}>
            Seguinte
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.version}>Versão 1.0</Text>
        <Text style={styles.copyright}>© Kamba 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F3D3D",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 16,
  },
  logo: {
    width: 180,
    height: 100,
  },
  welcomeText: {
    color: "#4EF4C2",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 24,
  },
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor:"#555",
    borderRadius: 15,
    backgroundColor: "#3F3D3D",
    marginBottom: 20,
  },
  picker: {
    color: "#FFF",
    width: "100%",
    fontSize: 14,
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#4EF4C2",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
  },
  version: {
    color: "#FFF",
    fontSize: 14,
  },
  copyright: {
    color: "#6E6B6B",
    fontSize: 12,
    marginTop: 4,
  },
});
