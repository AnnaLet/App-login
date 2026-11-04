import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Bem-vindo
       
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email:"
        >
      </TextInput>
      
      
        <TextInput
        style={styles.input}
        placeholder="Senha:"
        >
      </TextInput>
      <TouchableOpacity
      style = {styles.button}
      
      >
      Entrar
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  input:{
  backgroundColor: 'white',
  borderRadius: 30,
  margin: 5,
  padding: 5,
  },
  button: {
  backgroundColor: '#3498db',
  color:'white',
  borderRadius: 30,
  padding:5,
  textAlign: 'center',
  }
});
