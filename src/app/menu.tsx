import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Tarjeta de Bienvenida Superior */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>¡Bienvenido a OndaNet!</Text>
        <Text style={styles.welcomeSubtitle}>
          Conectamos tu hogar y empresa con la máxima velocidad en internet de fibra óptica y los mejores equipos de red.
        </Text>
      </View>

      {/* Título de la Sección */}
      <Text style={styles.sectionTitle}>Accesos Rápidos</Text>

      {/* Apartado 1: Nosotros */}
      <View style={styles.sectionCard}>
        <Text style={styles.cardQuestion}>¿Quiénes somos?</Text>
        <Text style={styles.cardDescription}>Haz clic abajo para que nos conozcas.</Text>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={() => router.push('/quienes-somos' as any)}
        >
          <Text style={styles.buttonText}>CONOCERNOS</Text>
        </TouchableOpacity>
      </View>

      {/* Apartado 2: Planes */}
      <View style={styles.sectionCard}>
        <Text style={styles.cardQuestion}>¿Quieres conocer qué paquetes tenemos para ti?</Text>
        <Text style={styles.cardDescription}>Haz clic abajo para ver todos los planes que tenemos para tí.</Text>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={() => router.push('/planes' as any)}
        >
          <Text style={styles.buttonText}>VER PLANES</Text>
        </TouchableOpacity>
      </View>

      {/* Apartado 3: Cobertura */}
      <View style={styles.sectionCard}>
        <Text style={styles.cardQuestion}>¿Quieres saber si tenemos disponibilidad en tu localidad?</Text>
        <Text style={styles.cardDescription}>Haz clic aquí abajo para verificar si llegamos a tu domicilio.</Text>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={() => router.push('/cobertura' as any)}
        >
          <Text style={styles.buttonText}>VERIFICAR COBERTURA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb', // Fondo claro y moderno
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  welcomeCard: {
    backgroundColor: '#0052CC', // Azul corporativo OndaNet
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 25,
  },
  welcomeTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    color: '#E6F4FE',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
    paddingLeft: 4,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#0052CC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});