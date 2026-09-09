import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function CourseDetails() {
  const { id } = useLocalSearchParams();

  const validCourses = ['IT101', 'IT102'];

  const courseId = Array.isArray(id) ? id[0] : id;

  if (!validCourses.includes(courseId)) {
    return (
      <View style={styles.container}>
        <View style={styles.errorCard}>
          <Text style={styles.errorTitle}>
            Course Not Found
          </Text>

          <Text style={styles.errorMessage}>
            Course not found: {courseId}
          </Text>
        </View>
      </View>
    );
  }

  const courseName =
    courseId === 'IT101'
      ? 'Introduction to Information Technology'
      : 'Programming Fundamentals';

  return (
    <View style={styles.container}>

      <Text style={styles.smallTitle}>
        COURSE INFORMATION
      </Text>

      <Text style={styles.title}>
        Course Details
      </Text>

      <View style={styles.courseHeader}>
        <Text style={styles.courseCode}>
          {courseId}
        </Text>

        <Text style={styles.courseName}>
          {courseName}
        </Text>
      </View>

      <View style={styles.card}>

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Course ID
          </Text>

          <Text style={styles.value}>
            {courseId}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Course Name
          </Text>

          <Text style={styles.value}>
            {courseName}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Status
          </Text>

          <Text style={styles.active}>
            Active
          </Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 45,
    backgroundColor: '#F4F5F9',
  },

  smallTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6C2BD9',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 20,
  },

  courseHeader: {
    backgroundColor: '#6C2BD9',
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
  },

  courseCode: {
    color: '#DCD0EF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  courseName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 27,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
  },

  infoRow: {
    paddingVertical: 12,
  },

  label: {
    fontSize: 12,
    color: '#888894',
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#30303A',
  },

  active: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A8F5A',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEF2',
  },

  errorCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 16,
  },

  errorTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 10,
  },

  errorMessage: {
    fontSize: 15,
    color: '#777782',
  },
});
