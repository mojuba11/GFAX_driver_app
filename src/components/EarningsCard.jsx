import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EarningsCard = ({ amount, trips }) => (
  <View style={styles.card}>
    <View style={styles.leftCol}>
      <Text style={styles.label}>Today's Earnings</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
    <View style={styles.divider} />
    <View style={styles.rightCol}>
      <MaterialCommunityIcons name="trending-up" size={20} color="#10B981" />
      <Text style={styles.trips}>{trips} Trips</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row', backgroundColor: '#FFF', padding: 20, 
    borderRadius: 20, elevation: 10, alignItems: 'center',
    marginHorizontal: 20, marginTop: -30 // Pulls it slightly over the map
  },
  leftCol: { flex: 1 },
  label: { color: '#94A3B8', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' },
  amount: { fontSize: 24, fontWeight: 'bold', color: '#1A237E' },
  divider: { width: 1, height: 40, backgroundColor: '#E2E8F0', marginHorizontal: 20 },
  rightCol: { alignItems: 'center' },
  trips: { fontSize: 14, fontWeight: 'bold', color: '#1A237E' }
});

export default EarningsCard;