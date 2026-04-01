import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RequestModal = ({ visible, requestData, onAccept, onDecline }) => {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    if (visible && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      onDecline();
    }
  }, [visible, timer]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.timerText}>{timer}s</Text>
          
          <View style={styles.header}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons name="account" size={40} color="#1A237E" />
            </View>
            <View>
              <Text style={styles.customerName}>{requestData?.name || 'New Request'}</Text>
              <Text style={styles.rating}>⭐ 4.8</Text>
            </View>
            <Text style={styles.price}>{requestData?.price || '₦0'}</Text>
          </View>

          <View style={styles.locationContainer}>
            <View style={styles.locRow}>
              <MaterialCommunityIcons name="circle-slice-8" size={20} color="#10B981" />
              <Text style={styles.locText} numberOfLines={1}>{requestData?.pickup || 'Pickup location'}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.locRow}>
              <MaterialCommunityIcons name="map-marker" size={20} color="#EF4444" />
              <Text style={styles.locText} numberOfLines={1}>{requestData?.dropoff || 'Destination'}</Text>
            </View>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.declineBtn} onPress={onDecline}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
              <Text style={styles.acceptText}>Accept Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#FFF', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  timerText: { alignSelf: 'center', fontSize: 24, fontWeight: 'bold', color: '#FF9800', marginBottom: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { backgroundColor: '#F3F4F6', padding: 10, borderRadius: 50, marginRight: 15 },
  customerName: { fontSize: 20, fontWeight: 'bold' },
  rating: { color: '#6B7280' },
  price: { marginLeft: 'auto', fontSize: 22, fontWeight: '900', color: '#1A237E' },
  locationContainer: { padding: 15, backgroundColor: '#F9FAFB', borderRadius: 15, marginBottom: 25 },
  locRow: { flexDirection: 'row', alignItems: 'center' },
  locText: { marginLeft: 10, fontSize: 16, color: '#374151', flex: 1 },
  line: { width: 2, height: 20, backgroundColor: '#E5E7EB', marginLeft: 9, marginVertical: 4 },
  actionRow: { flexDirection: 'row', gap: 15 },
  declineBtn: { flex: 1, padding: 18, borderRadius: 15, alignItems: 'center', backgroundColor: '#F3F4F6' },
  acceptBtn: { flex: 2, padding: 18, borderRadius: 15, alignItems: 'center', backgroundColor: '#10B981' },
  acceptText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  declineText: { color: '#6B7280', fontSize: 18, fontWeight: 'bold' }
});

export default RequestModal;