import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const EarningsScreen = () => {
  const data = [
    { id: '1', date: 'Mar 12', amount: '₦4,500', trips: 8 },
    { id: '2', date: 'Mar 11', amount: '₦12,200', trips: 15 },
    { id: '3', date: 'Mar 10', amount: '₦8,900', trips: 10 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Total Earnings</Text>
        <Text style={styles.total}>₦25,600</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.tripText}>{item.trips} Trips</Text>
            </View>
            <Text style={styles.amountText}>{item.amount}</Text>
          </View>
        )}
        contentContainerStyle={{padding: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { backgroundColor: '#1A237E', padding: 40, alignItems: 'center' },
  title: { color: '#BFDBFE', fontSize: 16 },
  total: { color: '#FFF', fontSize: 36, fontWeight: 'bold', marginTop: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  dateText: { fontWeight: 'bold', fontSize: 16 },
  tripText: { color: '#6B7280', fontSize: 12 },
  amountText: { fontSize: 18, fontWeight: 'bold', color: '#10B981' }
});

export default EarningsScreen;