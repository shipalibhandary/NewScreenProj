import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BoredActivity, getRandomActivity } from "../services/boredApi";

export default function BoredScreen() {
  const [data, setData] = useState<BoredActivity | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await getRandomActivity();
      setData(res);
    } catch (e) {
      setError("Could not load activity. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you Bored?</Text>

      {loading && <ActivityIndicator size="large" />}
      {!!error && <Text style={styles.error}>{error}</Text>}

      {data && !loading && (
        <View style={styles.card}>
          <Text style={styles.activity}>{data.activity}</Text>
          <Text style={styles.meta}>Type: {data.type ?? "-"}</Text>
          
        </View>
      )}

      <TouchableOpacity style={styles.btn} onPress={load}>
        <Text style={styles.btnText}>Get Another</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", justifyContent: "center", padding: 18 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 14 },
  card: { width: "85%", alignSelf: "center", padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#e5e7eb" },
  activity: { fontSize: 18, fontWeight: "700", textAlign: "center", marginBottom: 10 },
  meta: { textAlign: "center", color: "#555", marginTop: 4 },
  btn: { width: "55%", alignSelf: "center", marginTop: 16, backgroundColor: "#fac4cd", padding: 12, borderRadius: 10 },
  btnText: { color: "black", fontWeight: "900", textAlign: "center" },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
});
