import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Settings() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.smallTitle}>PREFERENCES</Text>

        <Text style={styles.title}>Settings</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferences</Text>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Notifications</Text>
              <Text style={styles.optionText}>
                Notifications are enabled
              </Text>
            </View>

            <View style={styles.status}>
              <Text style={styles.statusText}>ON</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Theme</Text>
              <Text style={styles.optionText}>
                Default appearance
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account</Text>

          <View style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Student Account</Text>
              <Text style={styles.optionText}>
                Manage your student information
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.option}>
            <View>
              <Text style={styles.optionTitle}>Student ID</Text>
              <Text style={styles.optionText}>
                146850
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Student Portal</Text>

          <Text style={styles.aboutText}>
            A simple student management application
            created as a React Native mini project.
          </Text>

          <Text style={styles.version}>
            Version 1.0.0
          </Text>
        </View>

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

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F1F29',
    marginBottom: 8,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },

  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#30303A',
  },

  optionText: {
    fontSize: 13,
    color: '#858590',
    marginTop: 4,
    maxWidth: 250,
  },

  status: {
    backgroundColor: '#E9E2F8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6C2BD9',
  },

  arrow: {
    fontSize: 28,
    color: '#9A9AA5',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEF2',
  },

  aboutCard: {
    backgroundColor: '#6C2BD9',
    padding: 22,
    borderRadius: 16,
    marginTop: 5,
  },

  aboutTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  aboutText: {
    color: '#EDE7F7',
    fontSize: 14,
    lineHeight: 21,
  },

  version: {
    color: '#D9CCED',
    fontSize: 12,
    marginTop: 15,
  },
});
