import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Definimos las propiedades que recibirá nuestro componente reutilizable
interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  onPress: () => void;
}

export default function ProductCard({ title, price, description, onPress }: ProductCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Título en azul corporativo */}
      <Text style={styles.productTitle}>{title}</Text>
      
      {/* Precio en verde justo debajo del título */}
      <Text style={styles.productPrice}>{price}</Text>
      
      {/* Descripción en gris */}
      <Text style={styles.productDescription}>{description}</Text>
      
      {/* Botón de ancho completo alineado al diseño de OndaNet */}
      <TouchableOpacity style={styles.detailButton} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.detailButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 4,
    // Sombra suave para separar la tarjeta del fondo blanco/gris
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0052CC', // Azul OndaNet de las imágenes
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#2ecc71', // Verde exacto para el precio
    fontWeight: '600',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666666', // Gris para la descripción del servicio/equipo
    marginBottom: 16,
    lineHeight: 20,
  },
  detailButton: {
    backgroundColor: '#0052CC', // Botón azul de ancho completo
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  detailButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});