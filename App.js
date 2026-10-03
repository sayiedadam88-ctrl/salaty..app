import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🕌 صلاتي</Text>
        <Text style={styles.subtitle}>مواقيت الصلاة والأذكار</Text>

        <View style={styles.dateBox}>
          <Text style={styles.date}>التاريخ الهجري</Text>
          <Text style={styles.location}>📍 جاري تحديد المدينة...</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>مواقيت الصلاة</Text>

          <Prayer name="الفجر" time="05:00" iqama="05:20" />
          <Prayer name="الظهر" time="12:00" iqama="12:15" />
          <Prayer name="العصر" time="15:30" iqama="15:45" />
          <Prayer name="المغرب" time="18:00" iqama="18:15" />
          <Prayer name="العشاء" time="19:30" iqama="19:45" />
        </View>

        <View style={styles.menuCard}>
          <Text style={styles.menu}>🤲 أذكار الصباح والمساء</Text>
          <Text style={styles.menu}>🤲 أذكار بعد الصلاة</Text>
          <Text style={styles.menu}>🌙 أذكار قبل النوم</Text>
          <Text style={styles.menu}>🧭 اتجاه القبلة</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Prayer({ name, time, iqama }) {
  return (
    <View style={styles.prayer}>
      <View>
        <Text style={styles.prayerName}>{name}</Text>
        <Text style={styles.iqama}>الإقامة: {iqama}</Text>
      </View>

      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b3d2e',
  },
  content: {
    padding: 20,
    paddingTop: 35,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  subtitle: {
    color: '#d9c27c',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  dateBox: {
    backgroundColor: '#145a43',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  date: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  location: {
    color: '#d9c27c',
    textAlign: 'center',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0b3d2e',
    textAlign: 'center',
    marginBottom: 10,
  },
  prayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  prayerName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
  },
  iqama: {
    fontSize: 13,
    color: '#777777',
    marginTop: 4,
  },
  time: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0b3d2e',
  },
  menuCard: {
    backgroundColor: '#145a43',
    borderRadius: 20,
    padding: 10,
  },
  menu: {
    color: '#ffffff',
    fontSize: 17,
    padding: 15,
    textAlign: 'right',
  },
});
