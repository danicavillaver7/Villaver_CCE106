import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const calculate = (operator: string) => {
    setMessage('');

    // Check if inputs are empty
    if (firstNumber.trim() === '' || secondNumber.trim() === '') {
      setResult('');
      setMessage('Please enter both numbers.');
      return;
    }

    // Convert inputs to numbers
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    // Check if inputs are invalid
    if (isNaN(num1) || isNaN(num2)) {
      setResult('');
      setMessage('Please enter valid numbers.');
      return;
    }

    // Prevent division by zero
    if (operator === '/' && num2 === 0) {
      setResult('');
      setMessage('Cannot divide by zero.');
      return;
    }

    let answer = 0;

    if (operator === '+') {
      answer = num1 + num2;
    } else if (operator === '-') {
      answer = num1 - num2;
    } else if (operator === '*') {
      answer = num1 * num2;
    } else if (operator === '/') {
      answer = num1 / num2;
    }

    setResult(String(answer));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />

      <View style={styles.buttonRow}>
        <Pressable
          style={styles.button}
          onPress={() => calculate('+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => calculate('-')}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => calculate('*')}
        >
          <Text style={styles.buttonText}>×</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => calculate('/')}
        >
          <Text style={styles.buttonText}>÷</Text>
        </Pressable>
      </View>

      {result !== '' && (
        <Text style={styles.result}>Result: {result}</Text>
      )}

      {message !== '' && (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2F2F2',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 18,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  button: {
    width: 60,
    height: 50,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  result: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },

  message: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
