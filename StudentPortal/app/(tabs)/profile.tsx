import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.smallTitle}>MY ACCOUNT</Text>

        <Text style={styles.title}>Student Profile</Text>

        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>DV</Text>
          </View>

          <View>
            <Text style={styles.name}>
              Danica Marie M. Villaver
            </Text>

            <Text style={styles.program}>
              BS Information Technology
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.value}>
              Danica Marie M. Villaver
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Student ID</Text>
            <Text style={styles.value}>
              146850
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Program</Text>
            <Text style={styles.value}>
              Bachelor of Science in Information Technology
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Section</Text>
            <Text style={styles.value}>
              IT Professional Track
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Student Details
        </Text>

        <Link
          href="/student/146850"
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>
            View Student Details
          </Text>
        </Link>

        <Text
          style={styles.secondaryButton}
          onPress={() => router.push('/student/146850')}
        >
          Open Details
        </Text>

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
    marginBottom: 25,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6C2BD9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#252530',
    marginBottom: 4,
  },

  program: {
    fontSize: 13,
    color: '#777782',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 28,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 18,
  },

  infoRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEF2',
    paddingBottom: 13,
    marginBottom: 13,
  },

  label: {
    fontSize: 12,
    color: '#888894',
    marginBottom: 4,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#30303A',
    lineHeight: 21,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 14,
  },

  primaryButton: {
    backgroundColor: '#6C2BD9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },

  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCD8E8',
    padding: 16,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C2BD9',
  },
});
