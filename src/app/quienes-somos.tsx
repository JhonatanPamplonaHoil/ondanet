import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function QuienesSomosScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Tarjeta de Presentación */}
      <View style={styles.infoCard}>
        <Text style={styles.title}>¿Quiénes Somos?</Text>
        <Text style={styles.description}>
          En <Text style={styles.boldText}>OndaNet</Text> somos líderes en conectividad. Nos dedicamos a ofrecer soluciones integrales de internet de alta velocidad mediante fibra óptica simétrica. 
        </Text>
        <Text style={styles.description}>
          No solo te damos la mejor conexión, sino que también proveemos los mejores equipos electrónicos de redes (routers inteligentes, sistemas Mesh y repetidores) para optimizar el alcance y la potencia de tu red en hogares y empresas.
        </Text>
      </View>

      {/* Tarjeta de Misión y Visión */}
      <View style={styles.row}>
        <View style={[styles.smallCard, { marginRight: 10 }]}>
          <Ionicons name="rocket-outline" size={32} color="#0052CC" style={styles.icon} />
          <Text style={styles.cardTitle}>Nuestra Misión</Text>
          <Text style={styles.cardText}>Llevar internet ultra rápido y estable a cada rincón, eliminando las zonas sin señal gracias a nuestro hardware avanzado.</Text>
        </View>

        <View style={styles.smallCard}>
          <Ionicons name="eye-outline" size={32} color="#0052CC" style={styles.icon} />
          <Text style={styles.cardTitle}>Nuestra Visión</Text>
          <Text style={styles.cardText}>Ser la empresa referente en telecomunicaciones, reconocida por la estabilidad de la red y la excelencia en equipos del hogar.</Text>
        </View>
      </View>

      {/* Valores de la Empresa */}
      <View style={styles.valuesCard}>
        <Text style={styles.valuesTitle}>Por qué elegir OndaNet</Text>
        <Text style={styles.valueItem}>• Conexión Simétrica Real (Misma velocidad de subida y bajada).</Text>
        <Text style={styles.valueItem}>• Hardware de Red Homologado de última generación (Wi-Fi 6).</Text>
        <Text style={styles.valueItem}>• Soporte Técnico especializado para Empresas y Casas.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  contentContainer: {
    padding: 16,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0052CC',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 22,
    marginBottom: 12,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#0052CC',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  icon: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 18,
  },
  valuesCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  valuesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  valueItem: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 24,
  },
});