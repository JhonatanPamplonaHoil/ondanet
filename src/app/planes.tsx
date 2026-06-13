import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import ProductCard from '../components/ProductCard';

export default function PlanesScreen() {
  const router = useRouter();
  
  // Hooks solicitados: useState para controlar los datos y el estado de carga
  const [productos, setProductos] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  // Hook solicitado: useEffect para simular traer los datos de OndaNet
  useEffect(() => {
    const datosImagen = [
      {
        id: '1',
        title: 'Plan Onda Hogar 100 Megas',
        price: '$400/mes',
        description: 'Fibra óptica simétrica ideal para el hogar.',
        type: 'Plan de Internet'
      },
      {
        id: '2',
        title: 'Router Rompemuros Wi-Fi 6',
        price: '$450',
        description: 'Mejora la cobertura en toda tu casa.',
        type: 'Equipamiento de Red'
      },
      {
        id: '3',
        title: 'Plan Onda Empresarial',
        price: '$1000/mes',
        description: 'IP fija y soporte técnico 24/7.',
        type: 'Plan de Internet'
      }
    ];

    // Simulamos un pequeño retraso de red de 1 segundo
    const temporizador = setTimeout(() => {
      setProductos(datosImagen);
      setCargando(false);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, []);

  // Si está cargando, muestra un indicador de carga azul corporativo
  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0052CC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          // Usamos el componente reutilizable del paso 1
          <ProductCard
            title={item.title}
            price={item.price}
            description={item.description}
            // Envío de parámetros mediante el router de Expo al presionar el botón
            onPress={() => {
              router.push({
                pathname: '/details',
                params: { 
                  title: item.title, 
                  price: item.price, 
                  description: item.description,
                  type: item.type
                }
              });
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa', // Fondo gris claro idéntico a la imagen
  },
  listContainer: {
    padding: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
});