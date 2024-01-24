import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleRegister = () => {
    // Implement registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleLoginRedirect = () => {

    // Navigate to the login page
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo centered */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      {/* Text below the form */}
      <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>
        Create an account with your mail, your name, and a secure password
      </Text>
      </View>
      

      <View style={styles.formField}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
      <Text style={styles.text}>You have already a account?</Text>
      <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  logoContainer: {
    marginTop:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
  },
  formField: {
    marginBottom: 60,
  },
  label: {
    fontSize: 16,
    marginBottom: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 'auto',
  },
  registerButton: {
    backgroundColor: '#6E4AB5',
    padding: 10,
    borderRadius: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign:'center'
  },
  descriptionText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
    paddingBottom: 75,
    width:281,
    color: "#8C8C8C"
  },
  footer:{
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',


  },
  loginLink:{
    color: '#6E4AB5',
  }
});

export default RegisterComponent;
