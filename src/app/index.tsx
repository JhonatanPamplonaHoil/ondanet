import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();
  
  // Valor inicial de la opacidad en 0 (totalmente invisible)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animación: Cambia la opacidad a 1 en 1.5 segundos
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0052CC" />
      
      {/* Contenedor Animado para el Nombre de la Empresa */}
      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
        <Text style={styles.brandText}>OndaNet</Text>
        <Text style={styles.sloganText}>Innovación y Conectividad Sin Límites</Text>
      </Animated.View>

      {/* Botón Ingresar */}
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.8}
        // Usamos 'as any' para evitar que TypeScript marque error en rojo
        onPress={() => router.replace('/menu' as any)} 
      >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0052CC', // Azul corporativo OndaNet
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 2,
  },
  sloganText: {
    fontSize: 16,
    color: '#E6F4FE',
    marginTop: 10,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Sombra para dispositivos Android
  },
  buttonText: {
    color: '#0052CC',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});