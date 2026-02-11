import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TaskProps = {
  title: string;
  completed: boolean;
  onPress: () => void;
  onDelete: () => void;
  onLongPress?: () => void;
};

export default function Task({
  title,
  completed,
  onPress,
  onDelete,
  onLongPress
}: TaskProps) {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={[styles.taskContainer, completed && styles.completedTask]}>
        <Text style={[styles.taskText, completed && styles.completedText]}>
          {title}
        </Text>

        <View style={styles.rightSection}>
          {completed && <Text style={styles.badge}>✓</Text>}

          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.deleteText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedTask: {
    backgroundColor: "#18183b",
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#666",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 18,
  },
});
