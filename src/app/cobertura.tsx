import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CoberturaScreen() {
  // Hooks useState solicitados para manejar el formulario y estados visuales
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState<'disponible' | 'no_disponible' | null>(null);

  // Manejo de Eventos: Función al presionar el botón consultar
  const manejarConsulta = () => {
    if (!ciudad || !direccion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setCargando(true);
    setResultado(null);

    // Simulamos consulta técnica a la base de datos de cobertura de OndaNet
    setTimeout(() => {
      setCargando(false);
      // Simulación: Si escribe "centro" sale disponible, cualquier otra cosa no disponible
      if (ciudad.toLowerCase().includes('centro') || direccion.toLowerCase().includes('principal')) {
        setResultado('disponible');
      } else {
        setResultado('no_disponible');
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Comprueba tu Cobertura</Text>
        <Text style={styles.formSubtitle}>Ingresa tus datos para validar si nuestra fibra óptica llega a tu dirección.</Text>

        <Text style={styles.label}>Ciudad / Municipio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Centro, Norte"
          placeholderTextColor="#aaa"
          value={ciudad}
          onChangeText={setCiudad}
        />

        <Text style={styles.label}>Dirección Exacta:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Av. Principal #123"
          placeholderTextColor="#aaa"
          value={direccion}
          onChangeText={setDireccion}
        />

        <TouchableOpacity style={styles.submitButton} onPress={manejarConsulta} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Verificar Disponibilidad</Text>
        </TouchableOpacity>
      </View>

      {/* Estado de carga */}
      {cargando && (
        <View style={styles.statusBox}>
          <ActivityIndicator size="large" color="#0052CC" />
          <Text style={styles.statusText}>Consultando mapas de cobertura...</Text>
        </View>
      )}

      {/* Manejo de estados: Resultado Disponible */}
      {resultado === 'disponible' && (
        <View style={[styles.statusBox, styles.successBox]}>
          <Text style={styles.resultTitleSuccess}>¡Buenas Noticias!</Text>
          <Text style={styles.resultText}>OndaNet cuenta con cobertura de Fibra Óptica en tu zona. Puedes contratar cualquier plan de internet y adquirir equipos inalámbricos de inmediato.</Text>
        </View>
      )}

      {/* Manejo de estados: Resultado No Disponible */}
      {resultado === 'no_disponible' && (
        <View style={[styles.statusBox, styles.errorBox]}>
          <Text style={styles.resultTitleError}>Zona en Expansión </Text>
          <Text style={styles.resultText}>Actualmente no contamos con cobertura total en esa dirección, pero puedes dejarnos tus datos para priorizar tu sector en nuestra próxima instalación de red.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 16,
  },
  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0052CC',
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#333333',
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  submitButton: {
    backgroundColor: '#0052CC',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statusBox: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  statusText: {
    marginTop: 10,
    color: '#555555',
    fontWeight: '500',
  },
  successBox: {
    backgroundColor: '#e8f8f5',
    borderWidth: 1,
    borderColor: '#2ecc71',
    alignItems: 'flex-start',
  },
  errorBox: {
    backgroundColor: '#fef9e7',
    borderWidth: 1,
    borderColor: '#f1c40f',
    alignItems: 'flex-start',
  },
  resultTitleSuccess: {
    color: '#27ae60',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  resultTitleError: {
    color: '#d35400',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  resultText: {
    color: '#555555',
    fontSize: 14,
    lineHeight: 20,
  },
});