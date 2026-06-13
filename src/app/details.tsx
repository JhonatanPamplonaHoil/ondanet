import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetailsScreen() {
  const router = useRouter();
  
  // EXPO ROUTER: Capturamos los parámetros enviados desde la pantalla de Planes
  const params = useLocalSearchParams();
  const { title, price, description, type } = params;

  // Hook useState para controlar si el usuario ya presionó el botón de adquirir
  const [procesado, setProcesado] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Tarjeta contenedora de detalles del producto/servicio */}
      <View style={styles.detailCard}>
        {/* Etiqueta superior en azul OndaNet (PLAN o EQUIPAMIENTO) */}
        <Text style={styles.productType}>{type ? String(type).toUpperCase() : 'SERVICIO'}</Text>
        
        {/* Título del plan o equipo seleccionado */}
        <Text style={styles.productTitle}>{title || 'Cargando producto...'}</Text>
        
        {/* Precio destacado en verde */}
        <Text style={styles.productPrice}>{price || '$0.00'}</Text>
        
        {/* Línea divisoria decorativa limpia */}
        <View style={styles.divider} />
        
        {/* Sección de descripción */}
        <Text style={styles.sectionLabel}>Descripción del Servicio:</Text>
        <Text style={styles.productDescription}>
          {description || 'No hay descripción disponible para este servicio actualmente.'}
        </Text>

        {/* Lista de beneficios agregados de OndaNet */}
        <Text style={styles.sectionLabel}>Beneficios incluidos:</Text>
        <Text style={styles.benefitText}>• Soporte técnico prioritario 24/7 de OndaNet.</Text>
        <Text style={styles.benefitText}>• Alta velocidad garantizada con latencia mínima de red.</Text>
        <Text style={styles.benefitText}>• Instalación y configuración profesional a domicilio.</Text>
      </View>

      {/* Flujo condicional dinámico usando el estado de React */}
      {!procesado ? (
        <TouchableOpacity 
          style={styles.actionButton} 
          activeOpacity={0.8}
          onPress={() => setProcesado(true)}
        >
          <Text style={styles.actionButtonText}>Contratar / Adquirir Ahora</Text>
        </TouchableOpacity>
      ) : (
        /* Cuadro de éxito interactivo que se muestra al presionar el botón */
        <View style={styles.successBox}>
          <Text style={styles.successText}>¡Solicitud Recibida con Éxito!</Text>
          <Text style={styles.successSubtext}>Un asesor de OndaNet se comunicará contigo muy pronto.</Text>
          
          <TouchableOpacity 
            style={styles.backButton} 
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            {/* Texto llamativo y amigable actualizado */}
            <Text style={styles.backButtonText}>Seguir Explorando OndaNet</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa', // Fondo gris claro idéntico a las tarjetas previas
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productType: {
    color: '#0052CC', // Azul OndaNet corporativo
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 20,
    color: '#2ecc71', // Verde de los precios de la app
    fontWeight: '700',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555',
    marginBottom: 6,
    marginTop: 8,
  },
  productDescription: {
    fontSize: 15,
    color: '#666666',
    lineHeight: 22,
    marginBottom: 16,
  },
  benefitText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 22,
    marginLeft: 4,
  },
  actionButton: {
    backgroundColor: '#0052CC',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    elevation: 2,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successBox: {
    backgroundColor: '#e8f8f5', // Fondo verde muy suave de éxito
    borderColor: '#2ecc71',
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    elevation: 1,
  },
  successText: {
    color: '#27ae60',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  successSubtext: {
    color: '#555555',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: '#0052CC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});