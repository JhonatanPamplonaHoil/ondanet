import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect para simular la API de OndaNet al cargar la pantalla
  useEffect(() => {
    const mockData = [
      { id: '1', type: 'plan', title: 'Plan Onda Hogar 100 Megas', price: '$25/mes', desc: 'Fibra óptica simétrica ideal para el hogar.' },
      { id: '2', type: 'equipo', title: 'Router Rompemuros Wi-Fi 6', price: '$45', desc: 'Mejora la cobertura en toda tu casa.' },
      { id: '3', type: 'plan', title: 'Plan Onda Empresarial', price: '$80/mes', desc: 'IP fija y soporte técnico 24/7.' }
    ];
    
    setTimeout(() => {
      setItems(mockData);
      setLoading(false);
    }, 1500); // Simula retraso de red
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0052CC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            price={item.price}
            description={item.desc}
            // Navegación entre pantallas + Envío de parámetros
            onPress={() => navigation.navigate('Details', { product: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f6fa' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});