import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.smallTitle}>
          STUDENT PORTAL
        </Text>

        <Text style={styles.title}>
          Welcome, Danica!
        </Text>

        <Text style={styles.subtitle}>
          Manage your student information and courses in one place.
        </Text>

        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>
            Student Summary
          </Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>
              Name
            </Text>

            <Text style={styles.value}>
              Danica Marie M. Villaver
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>
              Program
            </Text>

            <Text style={styles.value}>
              BS Information Technology
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>
              Section
            </Text>

            <Text style={styles.value}>
              IT Professional Track
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          My Courses
        </Text>

        <Link
          href="/course/IT101"
          style={styles.courseCard}
        >
          <Text style={styles.courseLine}>
            <Text style={styles.courseCode}>
              IT 101
            </Text>

            {'  '}

            <Text style={styles.courseName}>
              Introduction to Information Technology
            </Text>
          </Text>

            {'  '}

          <Text style={styles.viewCourse}>
            View Course →
          </Text>
        </Link>

        <Link
          href="/course/IT102"
          style={styles.courseCard}
        >
          <Text style={styles.courseLine}>
            <Text style={styles.courseCode}>
              IT 102
            </Text>

            {'  '}

            <Text style={styles.courseName}>
              Programming Fundamentals
            </Text>
          </Text>

            {'  '}

          <Text style={styles.viewCourse}>
            View Course →
          </Text>
        </Link>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },

  container: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },

  smallTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6C2BD9',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#70707A',
    marginBottom: 25,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 16,
  },

  infoRow: {
    marginBottom: 13,
  },

  label: {
    fontSize: 12,
    color: '#888894',
    marginBottom: 3,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#30303A',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 14,
  },

  courseCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E5F0',
  },

  courseLine: {
    marginBottom: 12,
  },

  courseCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C2BD9',
  },

  courseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#252530',
    marginBottom: 18,
  },

  viewCourse: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6C2BD9',
  },
});
