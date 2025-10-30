import { useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import Toast from "react-native-toast-message";

export default function PhoneScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<{
    cca2: CountryCode;
    callingCode: string[];
    flag: string;
  }>({
    cca2: "AO",
    callingCode: ["244"],
    flag: "🇦🇴",
  });

  const onSelectCountry = (c: any) => {
    setCountry({
      cca2: c.cca2,
      callingCode: c.callingCode,
      flag: c.flag,
    });
  };

  const handleNext = () => {
    const cleanedPhone = phone.replace(/\D/g, "");
    if (!cleanedPhone || cleanedPhone.length < 5) {
      Toast.show({
        type: "error",
        text1: "Por favor insira um número de telefone válido!",
      });
      return;
    }

    const fullNumber = `+${country.callingCode[0]}${cleanedPhone}`;
    console.log("Número completo:", fullNumber);
    router.push("/code");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Prossiga sempre, e torna-se o{"\n"}melhor Kamba de sempre!
      </Text>

      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/favicon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputWrapper}>
        <CountryPicker
          countryCode={country.cca2}
          withCallingCode
          withFilter
          withFlag
          withAlphaFilter
          onSelect={onSelectCountry}
          containerButtonStyle={styles.prefix}
        />
        <Text style={styles.prefixText}>{`+${country.callingCode[0]}`}</Text>

        <TextInput
          style={styles.input}
          placeholder="Número de telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.button}>
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
    marginRight: 8,
  },
  prefixText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 6,
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
