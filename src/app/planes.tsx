import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

// 1. AQUÍ LO ESTAMOS IMPORTANDO (Trayendo la receta a esta pantalla
import ProductCard from '../components/ProductCard';

export default function PlanesScreen() {
  const router = useRouter();

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
      nombre: 'Plan Onda Empresarial',
      precio: '$800/mes',
      descripcion: 'IP fija y soporte tecnico 24/7.',
    },

  ];

  const verDetallesPlan = (plan: typeof listaPlanes[0]) => {
    router.push({
      pathname: '/details' as any,
      params: { nombre: plan.nombre, precio: plan.precio, descripcion: plan.descripcion },
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Nuestros Planes de Internet</Text>

      {listaPlanes.map((plan) => (
        // 2. AQUÍ LO ESTAMOS LLAMANDO LITERALMENTE COMO COMPONENTE <ProductCard />
        <ProductCard 
          key={plan.id}
          title={plan.nombre}
          price={plan.precio}
          description={plan.descripcion}
          onPress={() => verDetallesPlan(plan)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7fb' },
  contentContainer: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a', marginBottom: 20 },
});