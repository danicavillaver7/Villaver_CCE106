import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function StudentDetails() {
  const { id } = useLocalSearchParams();

  const validStudentId = '146850';

  const studentId = Array.isArray(id) ? id[0] : id;

  if (studentId !== validStudentId) {
    return (
      <View style={styles.container}>
        <View style={styles.errorCard}>
          <Text style={styles.errorTitle}>
            Student Not Found
          </Text>

          <Text style={styles.errorMessage}>
            Student not found: {studentId}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.smallTitle}>
        STUDENT INFORMATION
      </Text>

      <Text style={styles.title}>
        Student Details
      </Text>

      <View style={styles.profileCard}>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            DV
          </Text>
        </View>

        <Text style={styles.name}>
          Danica Marie M. Villaver
        </Text>

        <Text style={styles.program}>
          BS Information Technology
        </Text>

      </View>

      <View style={styles.card}>

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Student ID
          </Text>

          <Text style={styles.value}>
            {studentId}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Full Name
          </Text>

          <Text style={styles.value}>
            Danica Marie M. Villaver
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Program
          </Text>

          <Text style={styles.value}>
            Bachelor of Science in Information Technology
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>
            Section
          </Text>

          <Text style={styles.value}>
            IT Professional Track
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

  profileCard: {
    backgroundColor: '#6C2BD9',
    alignItems: 'center',
    padding: 25,
    borderRadius: 16,
    marginBottom: 18,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6C2BD9',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },

  program: {
    color: '#E4DDF0',
    fontSize: 13,
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
    fontSize: 15,
    fontWeight: '600',
    color: '#30303A',
    lineHeight: 21,
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
