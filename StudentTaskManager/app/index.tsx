import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Task = {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
};

export default function StudentTaskManager() {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [message, setMessage] = useState('');

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete React Native Activity',
      dueDate: '2026-09-05',
      completed: false,
    },
    {
      id: '2',
      title: 'Review Programming Notes',
      dueDate: '2026-09-07',
      completed: true,
    },
    {
      id: '3',
      title: 'Study for Exam',
      dueDate: '2026-09-08',
      completed: false,
    },
  ]);

  const addTask = () => {
    if (taskTitle.trim() === '' || dueDate.trim() === '') {
      setMessage('Please enter a task title and due date.');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle.trim(),
      dueDate: dueDate.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setDueDate('');
    setMessage('Task added!');
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
    setMessage('Task updated!');
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    setMessage('Task deleted!');
  };

  const pendingTasks = tasks.filter(
    (task) => task.completed === false
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed === true
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      <Text style={styles.subtitle}>
        Stay organized and get things done!
      </Text>

      <View style={styles.profile}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileEmoji}>👤</Text>
        </View>

        <View>
          <Text style={styles.name}>
            Danica Marie M. Villaver
          </Text>

          <Text style={styles.program}>
            BS Information Technology
            d.villaver.146850.tc@umindanao.edu.ph
          </Text>
        </View>
      </View>

      <View style={styles.countContainer}>
        <View style={styles.countBox}>
          <Text style={styles.countIcon}></Text>

          <View>
            <Text style={styles.countNumber}>
              {pendingTasks}
            </Text>

            <Text style={styles.countText}>
              Pending Tasks
            </Text>
          </View>
        </View>

        <View style={styles.countBox}>
          <Text style={styles.countIcon}></Text>

          <View>
            <Text style={styles.countNumber}>
              {completedTasks}
            </Text>

            <Text style={styles.countText}>
              Completed Tasks
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Add New Task
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Task title"
        placeholderTextColor="#999"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Due date (YYYY-MM-DD)"
        placeholderTextColor="#999"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={addTask}
      >
        <Text style={styles.addButtonText}>
          + Add Task
        </Text>
      </Pressable>

      {message !== '' && (
        <Text style={styles.message}>
          {message}
        </Text>
      )}

      <Text style={styles.sectionTitle}>
        My Task List
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Pressable
              style={({ pressed }) => [
                styles.checkButton,
                item.completed && styles.checkedButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => toggleTask(item.id)}
            >
              <Text style={styles.checkText}>
                {item.completed ? '✓' : '○'}
              </Text>
            </Pressable>

            <View style={styles.taskInfo}>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.completedTask,
                ]}
              >
                {item.title}
              </Text>

              <Text style={styles.dueDate}>
                Due: {item.dueDate}
              </Text>

              <Text style={styles.status}>
                {item.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.deleteButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteText}>
                Delete
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  profileIcon: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#E8DDF8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  profileEmoji: {
    fontSize: 28,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  program: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },

  countContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  countBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  countIcon: {
    fontSize: 23,
    marginRight: 8,
  },

  countNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  countText: {
    fontSize: 11,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  input: {
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },

  addButton: {
    height: 45,
    backgroundColor: '#6C2BD9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonPressed: {
    opacity: 0.5,
  },

  message: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#777',
    fontSize: 13,
  },

  list: {
    paddingBottom: 30,
  },

  taskItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkButton: {
    width: 32,
    height: 32,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#6C2BD9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  checkedButton: {
    backgroundColor: '#E5F5E9',
    borderColor: '#55A66A',
  },

  checkText: {
    fontSize: 20,
    color: '#6C2BD9',
  },

  taskInfo: {
    flex: 1,
    paddingRight: 8,
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  dueDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },

  status: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  deleteButton: {
    backgroundColor: '#FCE4EC',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7,
  },

  deleteText: {
    color: '#C62828',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
