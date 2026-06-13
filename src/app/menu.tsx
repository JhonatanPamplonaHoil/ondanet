import { useRouter } from 'expo-router';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  const router = useRouter();
  const numeroContacto = "5604566870";

  // Función para abrir chat de WhatsApp directamente
  const abrirWhatsApp = () => {
    Linking.openURL(`https://wa.me/52${numeroContacto}`);
  };

  // Función para realizar llamada telefónica directa
  const realizarLlamada = () => {
    Linking.openURL(`tel:${numeroContacto}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Tarjeta de Bienvenida Superior */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>¡Bienvenido a OndaNet!</Text>
        <Text style={styles.welcomeSubtitle}>
          Conectamos tu hogar y empresa con la máxima velocidad en internet de fibra óptica y los mejores equipos de red.
        </Text>
      </View>

      {/* NUEVA SECCIÓN DE CONTACTO INTERACTIVA */}
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>📞 ¡Contrata Ahora!</Text>
        <Text style={styles.contactText}>
          Contáctanos para contratar el servicio que más le interese al número de WhatsApp <Text style={styles.boldText}>"{numeroContacto}"</Text> o llamando de forma directa.
        </Text>
        
        {/* Horarios de atención */}
        <Text style={styles.scheduleText}>
          🕒 Servicios disponibles de lunes a sábado en los horarios de 9:00 AM a 5:00 PM.
        </Text>

        {/* Botones de acción rápida */}
        <View style={styles.contactButtonsRow}>
          <TouchableOpacity 
            style={[styles.contactButton, { backgroundColor: '#25D366' }]} 
            activeOpacity={0.8}
            onPress={abrirWhatsApp}
          >
            <Text style={styles.contactButtonText}>WHATSAPP</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.contactButton, { backgroundColor: '#0052CC' }]} 
            activeOpacity={0.8}
            onPress={realizarLlamada}
          >
            <Text style={styles.contactButtonText}>LLAMAR AHORA</Text>
          </TouchableOpacity>
        </View>
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
        <Text style={styles.cardDescription}>Haz clic aquí abajo para verificar.</Text>
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
    backgroundColor: '#f5f7fb',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  welcomeCard: {
    backgroundColor: '#0052CC',
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
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
  },
  contactCard: {
    backgroundColor: '#fffcf0', // Fondo ligeramente amarillento/cálido de atención
    padding: 20,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#fef08a', // Borde sutil amarillo
    marginBottom: 25,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#854d0e',
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: '#451a03',
    lineHeight: 22,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#0052CC',
  },
  scheduleText: {
    fontSize: 12.5,
    color: '#713f12',
    fontWeight: '500',
    marginBottom: 16,
  },
  contactButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
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
  },
  button: {
    backgroundColor: '#0052CC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});