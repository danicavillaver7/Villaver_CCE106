import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.increaseButton} onPress={increase}>
          <Text style={styles.buttonText}>Increase</Text>
        </Pressable>

        <Pressable style={styles.decreaseButton} onPress={decrease}>
          <Text style={styles.buttonText}>Decrease</Text>
        </Pressable>

        <Pressable style={styles.resetButton} onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  counter: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 200,
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },

  increaseButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  decreaseButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  resetButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  resetText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
