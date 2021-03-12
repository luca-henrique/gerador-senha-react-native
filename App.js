import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import Slider from '@react-native-community/slider';
import Logo from './src/assets/logo.png';

let charset =
  'abcdefgh123456789ABCDEDYSADO002908458599441569abdilgopf/*-+@#$%&*';

const App = () => {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(10);

  const generatePass = () => {
    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{height: 55}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>
      <TouchableOpacity onPress={generatePass} style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}>{password}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
  logo: {
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
