import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  const goProfile = () => router.push("/profile" as any);
  const goSettings = () => alert("Settings )");
  const goAbout = () => alert("About )");
  const logout = () => router.replace("/login");
const goBored = () => router.push("/bored" as any);
const goDictionary = () => router.push("/dictionary" as any);



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>My App</Text>
        <Text style={styles.welcome}>Hi, User</Text>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={goProfile}>
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardSub}>View your details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={goSettings}>
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardSub}>App preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={goAbout}>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.cardSub}>App info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={logout}>
          <Text style={styles.cardTitle}>Logout</Text>
          <Text style={styles.cardSub}>Back to login</Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.card} onPress={goBored}>
          <Text style={styles.cardTitle}>Bored API</Text>
          <Text style={styles.cardSub}>Random activity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={goDictionary}>
  <Text style={styles.cardTitle}>Dictionary</Text>
  <Text style={styles.cardSub}>Search word meanings</Text>
</TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 18 },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#f2e0e3",
    marginBottom: 18,
    marginTop:50,

  },
  appName: { fontSize: 22, fontWeight: "bold" },
  welcome: { marginTop: 6, fontSize: 16, color: "#555" },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 16,
    minHeight: 110,
    justifyContent: "center",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  cardSub: { color: "#666" },
});
