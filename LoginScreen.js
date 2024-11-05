import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        placeholderTextColor="#ccc" // Light gray for placeholder text
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        placeholderTextColor="#ccc" // Light gray for placeholder text
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Login" 
          onPress={() => navigation.navigate('ForgotPassword')} 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Forgot Password?" 
          onPress={() => navigation.navigate('ForgotPassword')} 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Register" 
          onPress={() => navigation.navigate('Register')} 
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
    backgroundColor: 'black', // Set container background color to black
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'white', // Set title text color to white
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    color: 'white', // Set input text color to white
    backgroundColor: '#333', // Set input background color to dark gray
  },
  buttonContainer: {
    marginVertical: 16, // Space between buttons
  },
});

export default LoginScreen;
