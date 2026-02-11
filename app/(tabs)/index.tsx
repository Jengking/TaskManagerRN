import Task from "@/components/Task";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  //Navigation hook
  const router = useRouter();

  // Our task data (hardcoded for now)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React Native basics", completed: true },
    { id: 2, title: "Build a task manager", completed: false },
    { id: 3, title: "Understand state and props", completed: false },
    { id: 4, title: "Make changes to the code", completed: false },
    { id: 5, title: "Save & Reload", completed: false },
  ]);

  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  //function to delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //clear all completed tasks at once
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  //Navigate to task detail screen
  const openTaskDetail = (task: any) => {
    router.push({
      pathname: "/task-details",
      params: {
        id: task.id,
        title: task.title,
        completed: task.completed ? "true" : "false",
      },
    });
  };

  //Render a single task - FlatList calls this for each item
  const renderTask = ({ item }: { item: any }) => (
    <Task
      title={item.title}
      completed={item.completed}
      onPress={() => toggleTask(item.id)}
      onDelete={() => deleteTask(item.id)}
      onLongPress={() => openTaskDetail(item)}
    />
  );

  //Show when list is empty
  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>📝</Text>
      <Text style={styles.emptySubtext}>No tasks yet!</Text>
      <Text style={styles.emptyHint}>Add one above to get started</Text>
    </View>
  );

  //calculate stats
  const completedCount = tasks.filter((t) => t.completed).length;
  const hasCompletedTasks = completedCount > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task Manager</Text>

      <Text style={styles.hint}>💡 Long press a task to view details</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={taskInput}
          onChangeText={setTaskInput}
          onSubmitEditing={addTask}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        style={styles.taskList}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={tasks.length === 0 && styles.emptyList}
      />

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length}
        </Text>
        {hasCompletedTasks && (
          <TouchableOpacity style={styles.clearButton} onPress={clearCompleted}>
            <Text style={styles.clearButtonText}>Clear Completed</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  hint: {
    fontSize: 12,
    color: "#999",
    marginBottom: 15,
    fontStyle: "italic",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#007AFF",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  taskList: {
    flex: 1,
  },
  statsContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  statsText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  emptyList: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 60,
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  emptyHint: {
    fontSize: 14,
    color: "#999",
  },
  clearButton: {
    backgroundColor: "#ff3b30",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  clearButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
