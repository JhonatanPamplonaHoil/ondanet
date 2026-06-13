import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  // Recibimos los parámetros dinámicos desde la pantalla de Planes
  const params = useLocalSearchParams();

  // Valores por defecto en caso de que ocurra algún problema al pasar los datos
  const nombrePlan = params.nombre || 'Plan Onda Hogar Estándar';
  const precioPlan = params.precio || '$400/mes';
  const descripcionPlan = params.descripcion || 'Fibra óptica simétrica ideal para el hogar y entretenimiento.';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Contenedor tipo Tarjeta de Detalles */}
      <View style={styles.card}>
        <Text style={styles.planLabel}>PLAN DE INTERNET</Text>
        
        {/* Nombre Dinámico del Plan */}
        <Text style={styles.planTitle}>{nombrePlan}</Text>
        
        {/* Precio Dinámico del Plan */}
        <Text style={styles.planPrice}>{precioPlan}</Text>
        
        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Descripción del Servicio:</Text>
        <Text style={styles.sectionBody}>{descripcionPlan}</Text>

        <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Beneficios incluidos:</Text>
        <Text style={styles.bulletPoint}>• Soporte técnico prioritario 24/7 de OndaNet.</Text>
        <Text style={styles.bulletPoint}>• Alta velocidad garantizada con latencia mínima de red.</Text>
        <Text style={styles.bulletPoint}>• Instalación y configuración profesional a domicilio.</Text>
      </View>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  planLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0052CC', // Azul OndaNet
    letterSpacing: 1,
    marginBottom: 6,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22c55e', // Verde para el precio
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6,
  },
  sectionBody: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
    marginLeft: 4,
  },
});