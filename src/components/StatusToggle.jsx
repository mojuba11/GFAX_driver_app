import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const StatusToggle = ({ isOnline, onToggle }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.9} 
      onPress={onToggle}
      style={[styles.container, isOnline ? styles.onlineBg : styles.offlineBg]}
    >
      <View style={styles.content}>
        <Text style={styles.statusText}>
          {isOnline ? "YOU ARE ONLINE" : "GO ONLINE"}
        </Text>
        <View style={[styles.indicator, { backgroundColor: isOnline ? '#4ADE80' : '#94A3B8' }]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 18,
    borderRadius: 40,
    alignSelf: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  onlineBg: { backgroundColor: '#10B981' },
  offlineBg: { backgroundColor: '#1A237E' },
  content: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  statusText: { color: '#FFF', fontSize: 18, fontWeight: '900', letterSpacing: 1.5 },
  indicator: { width: 12, height: 12, borderRadius: 6, marginLeft: 15, borderWidth: 2, borderColor: '#FFF' }
});

export default StatusToggle;