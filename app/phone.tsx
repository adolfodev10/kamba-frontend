import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function PhoneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Prossiga sempre, e tornas-e o{"\n"}melhor Kamba de sempre!
      </Text>

      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/favicon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.prefix}>
          <Image
            source={{ uri: "https://flagcdn.com/w20/ao.png" }} // bandeira Angola
            style={styles.flag}
          />
          <Text style={styles.prefixText}>+244</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Número de telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.version}>Versão 1.0</Text>
        <Text style={styles.copyright}>© Kamba 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F3D3D",
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "center",
  },
  topText: {
    color: "#4EF4C2",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    margin: "auto",
    marginBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 180,
    height: 80,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2F2D2D",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  prefix: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 6,
  },
  prefixText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#4EF4C2",
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
  },
  version: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
  },
  copyright: {
    color: "#777",
    fontSize: 12,
    marginTop: 4,
  },
});
