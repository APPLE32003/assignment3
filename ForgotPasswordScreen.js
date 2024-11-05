import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput 
        placeholder="Enter your email" 
        style={styles.input} 
        placeholderTextColor="#ccc" // Light gray for placeholder text
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Reset Password" 
          onPress={() => navigation.navigate('Login')} // Navigate to Login page
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Back to Login" 
          onPress={() => navigation.navigate('Login')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'black', // Change to match your theme
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white', // Title text color
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: 'white', // Input text color
    backgroundColor: '#333', // Dark gray input background
  },
  buttonContainer: {
    marginVertical: 16, // Space between buttons
  },
});

export default ForgotPasswordScreen;
