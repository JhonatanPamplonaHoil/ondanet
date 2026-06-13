import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Captura de los parámetros enviados desde la pantalla anterior
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.type}>{product.type.toUpperCase()}</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      
      <Button 
        title="Contratar / Adquirir" 
        color="#2ecc71" 
        onPress={() => alert(`¡Gracias por elegir OndaNet! Procesando: ${product.title}`)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  type: { color: '#0052CC', fontWeight: 'bold', letterSpacing: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 8 },
  price: { fontSize: 20, color: '#2ecc71', marginBottom: 16, fontWeight: '600' },
  description: { fontSize: 16, color: '#555', marginBottom: 24, lineHeight: 22 }
});