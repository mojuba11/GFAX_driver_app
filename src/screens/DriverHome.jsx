import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// Import our custom components
import StatusToggle from '../components/StatusToggle';
import EarningsCard from '../components/EarningsCard';
import RequestModal from '../components/RequestModal';

const DriverHome = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Simulated Request Data
  const [currentRequest, setCurrentRequest] = useState({
    name: "Alex Johnson",
    price: "₦2,800",
    pickup: "Lekki Phase 1, Gate",
    dropoff: "Ikeja City Mall, Alausa",
    rating: "4.8"
  });

  // Simulation: Trigger a request 3 seconds after going online
  useEffect(() => {
    let timer;
    if (isOnline) {
      timer = setTimeout(() => {
        setModalVisible(true);
      }, 3000);
    } else {
      setModalVisible(false);
    }
    return () => clearTimeout(timer);
  }, [isOnline]);

  const handleAccept = () => {
    setModalVisible(false);
    Alert.alert("Ride Accepted", "Navigate to Lekki Phase 1 to pick up Alex.");
  };

  const handleDecline = () => {
    setModalVisible(false);
    // In a real app, this would send the request to another driver
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* 1. The Map */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 6.4654,
          longitude: 3.4064,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        customMapStyle={isOnline ? [] : offlineMapStyle}
      >
        {isOnline && (
          <Marker 
            coordinate={{ latitude: 6.4654, longitude: 3.4064 }}
            title="Your Location"
            description="Active & searching for rides"
            pinColor="#1A237E"
          />
        )}
      </MapView>

      {/* 2. Top UI: Earnings Card */}
      <SafeAreaView style={styles.topContainer}>
        <EarningsCard amount="₦12,450" trips="8" />
      </SafeAreaView>

      {/* 3. Bottom UI: Status Toggle */}
      <View style={styles.bottomContainer}>
        <StatusToggle 
          isOnline={isOnline} 
          onToggle={() => setIsOnline(!isOnline)} 
        />
      </View>

      {/* 4. Incoming Request Popup */}
      <RequestModal 
        visible={modalVisible}
        requestData={currentRequest}
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </View>
  );
};

// Simple Grayscale Map style for "Offline" mode
const offlineMapStyle = [
  { "elementType": "geometry", "stylers": [{ "saturation": -100 }] },
  { "elementType": "labels.text.fill", "stylers": [{ "saturation": -100 }] }
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  map: { width: '100%', height: '100%' },
  topContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 110, // Higher than tab bar
    left: 0,
    right: 0,
    zIndex: 10,
  }
});

export default DriverHome;