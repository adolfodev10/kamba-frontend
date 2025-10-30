import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";
import * as Notifications from "expo-notifications";
import Toast from "react-native-toast-message";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function CodeScreen() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [generatedCode, setGeneratedCode] = useState("");
  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    Notifications.requestPermissionsAsync();
    generateAndSendCode();
  }, []);

  const generateAndSendCode = async () => {
    const randomCode = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedCode(randomCode);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Seu código de verificação",
        body: `Seu código é ${randomCode}`,
      },
      trigger: null, // envia imediatamente
    });
  };

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const finalCode = code.join("");
    console.log("Código inserido:", finalCode);
    if (finalCode === generatedCode) {
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Código verificado com sucesso!",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Código incorreto. Tente novamente.",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={styles.logo}
        contentFit="contain"
      />
      <Text style={styles.title}>Insira o código enviado</Text>
      <View style={styles.inputRow}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputs.current[index] = el;
            }}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.resendText}>Reenviar Código</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          code.join("").length === 5
            ? styles.buttonActive
            : styles.buttonDisabled,
        ]}
        disabled={code.join("").length !== 5}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F3D3D",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 280,
    height: 140,
    marginBottom: 12,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    marginHorizontal: 6,
    backgroundColor: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  resendText: {
    color: "#4EF4C2",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: -150,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonActive: {
    backgroundColor: "#4EF4C2",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
