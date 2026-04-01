import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InventoryScreen = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="package-variant-closed" size={100} color="#E5E7EB" />
    <Text style={styles.title}>No Active Deliveries</Text>
    <Text style={styles.subtitle}>Orders you pick up from restaurants will appear here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1A237E', marginTop: 20 },
  subtitle: { textAlign: 'center', color: '#6B7280', marginTop: 10 }
});

export default InventoryScreen;