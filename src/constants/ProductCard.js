// src/components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ title, price, description, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.description}>{description}</Text>
      
      {/* Manejo de eventos en el botón */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 10, marginVertical: 8, elevation: 3 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0052CC' }, // Azul OndaNet
  price: { fontSize: 16, color: '#2ecc71', marginVertical: 4 },
  description: { color: '#666', marginBottom: 12 },
  button: { backgroundColor: '#0052CC', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});