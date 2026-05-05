import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { ref, update } from 'firebase/database';
import { db, auth } from './firebase';

const LOCATION_TASK_NAME = 'background-location-task';

// 1. Define the background task
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    const { latitude, longitude } = locations[0].coords;

    // Update the driver's live location in Firebase
    const driverId = auth.currentUser?.uid;
    if (driverId) {
      update(ref(db, `drivers/${driverId}`), {
        lat: latitude,
        lng: longitude,
        lastUpdated: Date.now(),
      });
    }
  }
});

// 2. Utility functions to start/stop tracking
export const LocationTracker = {
  startTracking: async () => {
    const { status: foreground } = await Location.requestForegroundPermissionsAsync();
    if (foreground !== 'granted') return;

    const { status: background } = await Location.requestBackgroundPermissionsAsync();
    if (background !== 'granted') return;

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 5000, // Update every 5 seconds
      distanceInterval: 10, // Or every 10 meters
      foregroundService: {
        notificationTitle: "GFAX Driver is Online",
        notificationBody: "Tracking your location for ride requests.",
        notificationColor: "#1A237E",
      },
    });
  },

  stopTracking: async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
    if (hasStarted) {
      await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    }
  }
};