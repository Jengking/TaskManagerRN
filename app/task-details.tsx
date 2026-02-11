import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Switch, TextInput } from "react-native";

export default function TaskDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [title, setTitle] = useState(params.title as string);
  const [completed, setCompleted] = useState(params.completed === "true");

  //go back to home screen
  const handleGoBack = () => {
    router.back();
  };

  //saved changes
  const handleSave = () => {
    console.log("Saved", { title, completed });
    router.back();
  };

  return (
    <View style={styles.container}>
      {/*header*/}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Task Details */}
      <View style={styles.content}>
        <Text style={styles.label}>Task Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Task title..."
        />

        <View style={styles.statusRow}>
          <Text style={styles.label}>Completed</Text>
          <Switch
            value={completed}
            onValueChange={setCompleted}
          />
        </View>

        {/* Task Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Task ID</Text>
          <Text style={styles.infoValue}>{params.id}</Text>
          
          <Text style={styles.infoLabel}>Status</Text>
          <Text style={[
            styles.statusBadge,
            completed ? styles.completedBadge : styles.pendingBadge
          ]}>
            {completed ? '✓ Completed' : '○ Pending'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    fontSize: 16,
    color: "#007AFF",
  },
  saveButton: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "600",
  },
  content: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  infoBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 12,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
  },
  statusBadge: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  completedBadge: {
    backgroundColor: "#e8f5e9",
    color: "#4caf50",
  },
  pendingBadge: {
    backgroundColor: "#fff3e0",
    color: "#ff9800",
  },
});
