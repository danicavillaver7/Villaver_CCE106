import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="course/[id]"
          options={{ title: 'Course Details' }}
        />

        <Stack.Screen
          name="student/[id]"
          options={{ title: 'Student Details' }}
        />
      </Stack>

      <StatusBar style="dark" />
    </>
  );
}
