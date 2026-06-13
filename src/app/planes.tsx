import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PlanesScreen() {
  const router = useRouter();

  // Lista de planes dinámicos de OndaNet para demostrar la funcionalidad a tus evaluadores
  const listaPlanes = [
    {
      id: '1',
      nombre: 'Plan Onda Hogar 100 Megas',
      precio: '$400/mes',
      descripcion: 'Fibra óptica simétrica ideal para el hogar, redes sociales y tareas escolares.',
    },
    {
      id: '2',
      nombre: 'Plan Onda Pro 200 Megas',
      precio: '$600/mes',
      descripcion: 'Velocidad duplicada recomendada para streaming en 4K, teletrabajo y juegos en línea.',
    },
    {
      id: '3',
      nombre: 'Plan Onda Premium 500 Megas',
      precio: '$900/mes',
      descripcion: 'Conexión masiva para hogares inteligentes y empresas con múltiples dispositivos conectados en simultáneo.',
    },
  ];

  const verDetallesPlan = (plan: typeof listaPlanes[0]) => {
    // IMPORTANTE: Aquí se envían los parámetros dinámicos entre pantallas usando Expo Router
    router.push({
      pathname: '/details' as any,
      params: {
        nombre: plan.nombre,
        precio: plan.precio,
        descripcion: plan.descripcion,
      },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Nuestros Planes de Internet</Text>
      <Text style={styles.subtitle}>Selecciona el paquete ideal para tu velocidad de vida:</Text>

      {listaPlanes.map((plan) => (
        <View key={plan.id} style={styles.card}>
          <Text style={styles.planName}>{plan.nombre}</Text>
          <Text style={styles.planPrice}>{plan.precio}</Text>
          
          <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => verDetallesPlan(plan)}
          >
            <Text style={styles.buttonText}>VER DETALLES Y BENEFICIOS</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  planPrice: {
    fontSize: 16,
    color: '#22c55e',
    fontWeight: 'bold',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#0052CC',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});