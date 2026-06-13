import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // Cabecera superior azul según image_17d5cc.png
        headerStyle: {
          backgroundColor: '#0052CC',
          height: 70,
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerTitleAlign: 'left',
        
        // Estilos de la barra inferior corregidos para pantallas completas
        tabBarActiveTintColor: '#0052CC',
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
          height: 75,         // Más alto para acomodar el espacio extra
          paddingTop: 8,
          paddingBottom: 22,  // Margen de seguridad para que los botones de Android no estorben
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      {/* PANTALLA DE BIENVENIDA (Animación e Ingreso) */}
      {/* Oculta de las pestañas inferiores y sin cabecera azul */}
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Oculta por completo la barra inferior aquí
        }}
      />

      {/* 1. Menú (Inicio) */}
      <Tabs.Screen
        name="menu" // Cambiado a 'menu' para que el index sea la animación
        options={{
          title: 'OndaNet - Inicio',
          tabBarLabel: 'Menú',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>☰</Text>,
        }}
      />

      {/* 2. Quiénes Somos */}
      <Tabs.Screen
        name="quienes-somos"
        options={{
          title: 'Quiénes Somos',
          tabBarLabel: 'Nosotros',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>👥</Text>,
        }}
      />

      {/* 3. Planes y Equipamiento */}
      <Tabs.Screen
        name="planes"
        options={{
          title: 'Planes y Equipamiento',
          tabBarLabel: 'Planes',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>🌐</Text>,
        }}
      />

      {/* 4. Cobertura */}
      <Tabs.Screen
        name="cobertura"
        options={{
          title: 'Verificar Cobertura',
          tabBarLabel: 'Cobertura',
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 18 }}>📍</Text>,
        }}
      />

      {/* 5. Pantalla de Detalle */}
      <Tabs.Screen
        name="details"
        options={{
          title: ' Tu Conexión',
          href: null, 
        }}
      />
    </Tabs>
  );
}