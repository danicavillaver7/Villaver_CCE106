import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const COLORS = {
  background: '#F4F7F9',
  white: '#FFFFFF',
  primary: '#1597B5',
  lightPrimary: '#E4F4F8',
  text: '#1F2933',
  secondary: '#6B7280',
  border: '#E5E7EB',
  success: '#2E8B57',
};

const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
};

type MetricCardProps = {
  title: string;
  value: string;
  description: string;
};

function MetricCard({
  title,
  value,
  description,
}: MetricCardProps) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricTitle}>{title}</Text>

      <Text style={styles.metricValue}>{value}</Text>

      <Text style={styles.metricDescription}>
        {description}
      </Text>
    </View>
  );
}

export default function App() {
  const { width } = useWindowDimensions();

  const narrowScreen = width < 600;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.label}>
            STUDENT DASHBOARD
          </Text>

          <Text style={styles.title}>
            Dashboard
          </Text>

          <Text style={styles.subtitle}>
            Welcome back, Danica
          </Text>
        </View>

        <View style={styles.profile}>
          <Text style={styles.profileText}>
            DV
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Overview
      </Text>

      <View
        style={[
          styles.metrics,
          narrowScreen && styles.metricsNarrow,
        ]}
      >
        <MetricCard
          title="Courses"
          value="6"
          description="Active courses"
        />

        <MetricCard
          title="Pending Tasks"
          value="4"
          description="Tasks to complete"
        />

        <MetricCard
          title="Progress"
          value="85%"
          description="Overall progress"
        />
      </View>

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.actionCard}>
        <View style={styles.actionCircle}>
          <Text style={styles.actionLetter}>
            C
          </Text>
        </View>

        <View style={styles.actionText}>
          <Text style={styles.actionTitle}>
            View Courses
          </Text>

          <Text style={styles.actionDescription}>
            Check your active courses
          </Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <View style={styles.actionCircle}>
          <Text style={styles.actionLetter}>
            T
          </Text>
        </View>

        <View style={styles.actionText}>
          <Text style={styles.actionTitle}>
            View Tasks
          </Text>

          <Text style={styles.actionDescription}>
            Review your pending tasks
          </Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <View style={styles.actionCircle}>
          <Text style={styles.actionLetter}>
            P
          </Text>
        </View>

        <View style={styles.actionText}>
          <Text style={styles.actionTitle}>
            Check Progress
          </Text>

          <Text style={styles.actionDescription}>
            View your learning progress
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Recent Activity
      </Text>

      <View style={styles.activityCard}>
        <View style={styles.activityRow}>
          <View style={styles.statusDot} />

          <View style={styles.activityText}>
            <Text style={styles.activityTitle}>
              Programming Activity
            </Text>

            <Text style={styles.activityDescription}>
              Completed a recent programming activity.
            </Text>

            <Text style={styles.activityTime}>
              Recently completed
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.activityRow}>
          <View style={styles.statusDot} />

          <View style={styles.activityText}>
            <Text style={styles.activityTitle}>
              Dashboard Project
            </Text>

            <Text style={styles.activityDescription}>
              Mobile Dashboard UI is in progress.
            </Text>

            <Text style={styles.activityTime}>
              In progress
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: SPACING.large,
    paddingTop: 55,
    paddingBottom: SPACING.extraLarge,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.large,
  },

  headerText: {
    flex: 1,
    paddingRight: SPACING.medium,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 1,
    marginBottom: SPACING.small,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.secondary,
  },

  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: SPACING.medium,
    marginBottom: SPACING.medium,
  },

  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  metricsNarrow: {
    flexDirection: 'column',
  },

  metricCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    flexGrow: 1,
    flexBasis: 160,
    minWidth: 150,
  },

  metricTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.secondary,
    marginBottom: SPACING.small,
  },

  metricValue: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },

  metricDescription: {
    fontSize: 12,
    color: COLORS.secondary,
  },

  actionCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: SPACING.medium,
    marginBottom: SPACING.small,
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionCircle: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.lightPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.medium,
  },

  actionLetter: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
  },

  actionText: {
    flex: 1,
  },

  actionTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },

  actionDescription: {
    color: COLORS.secondary,
    fontSize: 12,
  },

  activityCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: SPACING.medium,
  },

  activityRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.success,
    marginTop: 5,
    marginRight: SPACING.medium,
  },

  activityText: {
    flex: 1,
  },

  activityTitle: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },

  activityDescription: {
    color: COLORS.secondary,
    fontSize: 14,
    lineHeight: 20,
  },

  activityTime: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: SPACING.small,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.medium,
  },
});
