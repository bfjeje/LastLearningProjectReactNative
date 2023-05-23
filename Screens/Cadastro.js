import React, {useEffect, useState} from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
const Cadastro = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [modelo, setModelo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  useEffect(() => {}, []);
  return (
    <View style={{padding: 20, alignItems: 'center'}}>
      <Image
        source={null}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderColor: '#545454',
          borderWidth: 1,
        }}
      />

      <TouchableOpacity>
        <Text>Carregar imagem</Text>
      </TouchableOpacity>

      <TextInput
        value={titulo}
        onChangeText={txt => setTitulo(txt)}
        placeholder="Titulo"
        style={{
          fontSize: 16,
          marginTop: 10,
          borderWidth: 1,
          width: '100%',
          height: 50,
          borderRadius: 10,
          padding: 7,
          marginBottom: 10,
        }}
        placeholderTextColor="#5a5a5a"
      />

      <TextInput
        value={categoria}
        onChangeText={txt => setCategoria(txt)}
        placeholder="Categoria"
        style={{
          fontSize: 16,
          marginTop: 10,
          borderWidth: 1,
          width: '100%',
          height: 50,
          padding: 10,
          borderRadius: 7,
          marginBottom: 10,
        }}
        placeholderTextColor="#5a5a5a"
      />
      <TextInput
        value={modelo}
        onChangeText={txt => setModelo(txt)}
        placeholder="Modelo"
        style={{
          marginBottom: 50,
          fontSize: 16,
          marginTop: 10,
          borderWidth: 1,
          width: '100%',
          height: 50,
          padding: 10,
          borderRadius: 7,
        }}
        placeholderTextColor="#5a5a5a"
      />
      <TextInput
        value={quantidade}
        onChangeText={txt => setQuantidade(txt)}
        placeholder="Quantidade"
        style={{
          marginBottom: 50,
          fontSize: 16,
          marginTop: 10,
          borderWidth: 1,
          width: '100%',
          height: 50,
          padding: 10,
          borderRadius: 7,
        }}
        placeholderTextColor="#5a5a5a"
      />

      <Button title="Cadastrar" onPress={null} />
    </View>
  );
};
export default Cadastro;
