import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <MaterialCommunityIcons name="steering" size={80} color="#1A237E" style={styles.logo} />
        <Text style={styles.title}>Bricks Driver</Text>
        <Text style={styles.subtitle}>Enter your credentials to start earning</Text>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email-outline" size={20} color="#6B7280" />
          <TextInput style={styles.input} placeholder="Driver Email" keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock-outline" size={20} color="#6B7280" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('DriverHome')}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>New Driver? <Text style={{fontWeight: 'bold'}}>Register Here</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  inner: { flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center' },
  logo: { marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#1A237E' },
  subtitle: { color: '#6B7280', marginBottom: 30 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', padding: 15, borderRadius: 12, marginBottom: 15, width: '100%' },
  input: { flex: 1, marginLeft: 10 },
  loginBtn: { backgroundColor: '#1A237E', width: '100%', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  loginText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  registerLink: { marginTop: 20, color: '#1A237E' }
});

export default LoginScreen;