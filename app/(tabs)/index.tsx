import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Villaver App</Text>

      <Text style={styles.name}>Danica Marie M. Villaver</Text>

      <Text style={styles.course}>
        Bachelor of Science in Information Technology
      </Text>

      <Text style={styles.ideaTitle}>My App Idea</Text>

      <Text style={styles.idea}>
        My app idea is to create a simple student organizer
        that helps students manage their school tasks,
        activities, and important reminders.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDEBFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 8,
  },

  course: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7C3AED',
    textAlign: 'center',
    maxWidth: 320,
    lineHeight: 26,
    marginBottom: 25,
  },

  ideaTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 10,
  },

  idea: {
    fontSize: 17,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 340,
  },
});
