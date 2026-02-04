import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // UI only – no backend
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register" as any)}>
        <Text style={styles.register}>New user? Register</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    width:"80%",
    alignSelf: "center",
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    backgroundColor: "#fac4cd",
    alignSelf: "center",
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgot: {
    color: "#4a90e2",
    textAlign: "center",
    marginTop: 16,
  },
  register: {
    textAlign: "center",
    marginTop: 20,
    color: "#555",
  },
});
