import { useState } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { getWordMeaning } from "../services/dictionaryApi";

export default function DictionaryScreen() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWord = async () => {
    if (!word.trim()) return;

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await getWordMeaning(word.trim());
      setResult(data[0]);
    } catch (e) {
      setError("Word not found. Please try another word.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dictionary</Text>

      <TextInput
        value={word}
        onChangeText={setWord}
        placeholder="Enter a word"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={searchWord}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}

      {!!error && <Text style={styles.error}>{error}</Text>}

      {result && !loading && (
        <View style={styles.card}>
          <Text style={styles.word}>{result.word}</Text>

          <Text style={styles.part}>
            ({result.meanings[0]?.partOfSpeech})
          </Text>

          <Text style={styles.definition}>
            {result.meanings[0]?.definitions[0]?.definition}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: "white",
    alignItems:"center",
    padding: 18,
  },
  title: {
    marginTop: 100,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 14,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  button: {
    width: "40%",
    backgroundColor: "#fac4cd",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  card: {
    marginTop: 30,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
  },
  word: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  part: {
    fontStyle: "italic",
    color: "#555",
    marginBottom: 6,
  },
  definition: {
    fontSize: 15,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
