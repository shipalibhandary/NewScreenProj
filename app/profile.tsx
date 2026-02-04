import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      {/* Profile Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Veena</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>veena@gmail.com</Text>

        <Text style={styles.label}>Mobile</Text>
        <Text style={styles.value}>9996543210</Text>
      </View>

      {/* Edit Button (UI only) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Edit Profile (UI only)")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    
  },

  /* Card */
  card: {
    width: "70%",              
    backgroundColor: "#e3eafa",
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
  },

  /* Button */
  button: {
    width: "70%",              
    backgroundColor: "#fac4cd",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 14,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  back: {
    color: "#4a90e2",
    fontSize: 15,
  },
});
