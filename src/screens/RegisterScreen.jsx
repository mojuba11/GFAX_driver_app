import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [vehicle, setVehicle] = useState('car'); // Default

  const VehicleOption = ({ type, icon, label }) => (
    <TouchableOpacity 
      style={[styles.vehicleCard, vehicle === type && styles.selectedCard]}
      onPress={() => setVehicle(type)}
    >
      <MaterialCommunityIcons name={icon} size={30} color={vehicle === type ? '#FFF' : '#1A237E'} />
      <Text style={[styles.vehicleLabel, vehicle === type && {color: '#FFF'}]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding: 25}}>
      <Text style={styles.title}>Partner with Bricks</Text>
      
      <Text style={styles.sectionTitle}>Select Vehicle Type</Text>
      <View style={styles.vehicleGrid}>
        <VehicleOption type="keke" icon="rickshaw" label="Keke" />
        <VehicleOption type="car" icon="car" label="Car" />
        <VehicleOption type="bike" icon="motorbike" label="Food Delivery" />
      </View>

      <Text style={styles.sectionTitle}>Document Upload</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <MaterialCommunityIcons name="file-document-outline" size={24} color="#6B7280" />
        <Text style={styles.uploadText}>Upload Driver's License</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadBox}>
        <MaterialCommunityIcons name="shield-check-outline" size={24} color="#6B7280" />
        <Text style={styles.uploadText}>Vehicle Inspection Paper</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate('DriverHome')}>
        <Text style={styles.submitText}>Submit Application</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1A237E', marginTop: 40, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#374151', marginVertical: 15 },
  vehicleGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  vehicleCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 15, width: '30%', alignItems: 'center', elevation: 2 },
  selectedCard: { backgroundColor: '#1A237E' },
  vehicleLabel: { fontSize: 12, marginTop: 5, fontWeight: 'bold' },
  uploadBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 20, borderRadius: 12, borderStyle: 'dashed', borderWidth: 1, borderColor: '#9CA3AF', marginBottom: 15 },
  uploadText: { marginLeft: 15, color: '#6B7280' },
  submitBtn: { backgroundColor: '#FF9800', padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 20 },
  submitText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});

export default RegisterScreen;